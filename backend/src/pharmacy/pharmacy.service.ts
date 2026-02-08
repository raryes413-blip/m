import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { PrescriptionsService } from '../prescriptions/prescriptions.service';

@Injectable()
export class PharmacyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prescriptionsService: PrescriptionsService,
  ) {}

  getInbox() {
    return this.prisma.prescription.findMany({
      where: { status: 'SENT_TO_PHARMACY' },
      include: { patient: true, items: true },
      take: 50,
    });
  }

  async dispense(qrPayload: string, pharmacistId: string) {
    const prescription = await this.prescriptionsService.validateQrPayload(qrPayload);
    if (!prescription) {
      throw new NotFoundException('Invalid or expired token');
    }
    const dispense = await this.prisma.dispense.create({
      data: {
        prescriptionId: prescription.id,
        pharmacistId,
      },
    });
    await this.prisma.prescription.update({
      where: { id: prescription.id },
      data: { status: 'DISPENSED' },
    });
    const claim = await this.prisma.claim.create({
      data: {
        dispenseId: dispense.id,
      },
    });
    return { dispense, claim };
  }
}
