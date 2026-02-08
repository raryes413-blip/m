import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ReferenceDataService } from './reference-data.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole } from '@prisma/client';

@Controller()
export class ReferenceDataController {
  constructor(private readonly referenceDataService: ReferenceDataService) {}

  @Get('regions')
  getRegions() {
    return this.referenceDataService.getRegions();
  }

  @Post('regions')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  createRegion(@Body() dto: CreateRegionDto) {
    return this.referenceDataService.createRegion(dto);
  }
}
