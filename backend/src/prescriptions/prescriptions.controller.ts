import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { AddItemDto } from './dto/add-item.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('prescriptions')
@UseGuards(JwtAuthGuard)
export class PrescriptionsController {
  constructor(private readonly prescriptionsService: PrescriptionsService) {}

  @Post()
  create(@Body() dto: CreatePrescriptionDto, @Req() req: { user: { sub: string } }) {
    return this.prescriptionsService.create(dto, req.user.sub);
  }

  @Post(':id/items')
  addItem(@Param('id') id: string, @Body() dto: AddItemDto) {
    return this.prescriptionsService.addItem(id, dto);
  }

  @Post(':id/send')
  send(@Param('id') id: string) {
    return this.prescriptionsService.sendToPharmacy(id);
  }
}
