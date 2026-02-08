import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { AddItemDto } from './dto/add-item.dto';
import { randomBytes, createHash } from 'crypto';
import PDFDocument from 'pdfkit';

@Injectable()
export class PrescriptionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreatePrescriptionDto, doctorId: string) {
    return this.prisma.prescription.create({
      data: {
        encounterId: dto.encounterId,
        doctorId,
        patientId: dto.patientId,
      },
    });
  }

  addItem(prescriptionId: string, dto: AddItemDto) {
    return this.prisma.prescriptionItem.create({
      data: {
        prescriptionId,
        medicationName: dto.medicationName,
        dose: dto.dose,
        durationDays: dto.durationDays,
        substitutionAllowed: dto.substitutionAllowed,
      },
    });
  }

  async sendToPharmacy(prescriptionId: string) {
    const prescription = await this.prisma.prescription.findUnique({
      where: { id: prescriptionId },
      include: { patient: true, items: true },
    });
    if (!prescription) {
      throw new NotFoundException('Prescription not found');
    }
    const token = randomBytes(16).toString('hex');
    const tokenHash = createHash('sha256').update(token).digest('hex');
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await this.prisma.prescription.update({
      where: { id: prescriptionId },
      data: {
        status: 'SENT_TO_PHARMACY',
        qrTokenHash: tokenHash,
        qrExpiresAt: expiresAt,
      },
    });

    const pdfBase64 = await this.generatePdfBase64(prescription.id);

    return {
      qrPayload: `RX:${prescriptionId}:${token}`,
      expiresAt,
      pdfBase64,
    };
  }

  async validateQrPayload(payload: string) {
    const [prefix, prescriptionId, token] = payload.split(':');
    if (prefix !== 'RX' || !prescriptionId || !token) {
      return null;
    }
    const tokenHash = createHash('sha256').update(token).digest('hex');
    const prescription = await this.prisma.prescription.findUnique({
      where: { id: prescriptionId },
      include: { items: true, patient: true },
    });
    if (!prescription || !prescription.qrTokenHash || !prescription.qrExpiresAt) {
      return null;
    }
    if (prescription.qrTokenHash !== tokenHash) {
      return null;
    }
    if (prescription.qrExpiresAt.getTime() < Date.now()) {
      return null;
    }
    await this.prisma.prescription.update({
      where: { id: prescriptionId },
      data: { qrTokenHash: null, qrExpiresAt: null },
    });
    return prescription;
  }

  private generatePdfBase64(prescriptionId: string) {
    return new Promise<string>((resolve) => {
      const doc = new PDFDocument({ margin: 40 });
      const chunks: Buffer[] = [];
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(chunks);
        resolve(pdfBuffer.toString('base64'));
      });
      doc.fontSize(18).text('Morocco e-Prescription', { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(`Prescription ID: ${prescriptionId}`);
      doc.text('Generated for pharmacy dispensing.');
      doc.moveDown();
      doc.text('Darija note: Wash ttsda9 l-id w QR f saydliya.');
      doc.end();
    });
  }
}
