import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateOrganizationDto) {
    return this.prisma.organization.create({ data: dto });
  }

  verify(id: string) {
    return this.prisma.organization.update({
      where: { id },
      data: { verificationStatus: 'APPROVED' },
    });
  }

  reject(id: string) {
    return this.prisma.organization.update({
      where: { id },
      data: { verificationStatus: 'REJECTED' },
    });
  }
}
