import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateRegionDto } from './dto/create-region.dto';

@Injectable()
export class ReferenceDataService {
  constructor(private readonly prisma: PrismaService) {}

  getRegions() {
    return this.prisma.region.findMany({ orderBy: { code: 'asc' } });
  }

  createRegion(dto: CreateRegionDto) {
    return this.prisma.region.create({ data: dto });
  }
}
