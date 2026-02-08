import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreatePatientDto) {
    return this.prisma.patient.create({
      data: {
        nationalId: dto.nationalId,
        cnssNumber: dto.cnssNumber,
        firstName: dto.firstName,
        lastName: dto.lastName,
        dateOfBirth: new Date(dto.dateOfBirth),
        gender: dto.gender,
      },
    });
  }

  search(query?: string) {
    if (!query) {
      return this.prisma.patient.findMany({ take: 20 });
    }
    return this.prisma.patient.findMany({
      where: {
        OR: [
          { nationalId: { contains: query, mode: 'insensitive' } },
          { firstName: { contains: query, mode: 'insensitive' } },
          { lastName: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: 20,
    });
  }

  getById(id: string) {
    return this.prisma.patient.findUnique({ where: { id } });
  }
}
