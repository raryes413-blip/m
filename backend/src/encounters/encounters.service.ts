import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateEncounterDto } from './dto/create-encounter.dto';

@Injectable()
export class EncountersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateEncounterDto, doctorId: string) {
    return this.prisma.encounter.create({
      data: {
        patientId: dto.patientId,
        doctorId,
        notes: dto.notes,
      },
    });
  }
}
