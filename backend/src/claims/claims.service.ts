import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class ClaimsService {
  constructor(private readonly prisma: PrismaService) {}

  submit(id: string) {
    return this.prisma.claim.update({
      where: { id },
      data: { status: 'SUBMITTED' },
    });
  }

  approve(id: string) {
    return this.prisma.claim.update({
      where: { id },
      data: { status: 'APPROVED' },
    });
  }

  reject(id: string) {
    return this.prisma.claim.update({
      where: { id },
      data: { status: 'REJECTED' },
    });
  }
}
