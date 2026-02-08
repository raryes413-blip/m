import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DispenseDto } from './dto/dispense.dto';

@Controller('pharmacy')
@UseGuards(JwtAuthGuard)
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get('inbox')
  getInbox() {
    return this.pharmacyService.getInbox();
  }

  @Post('dispense')
  dispense(@Body() dto: DispenseDto, @Req() req: { user: { sub: string } }) {
    return this.pharmacyService.dispense(dto.qrPayload, req.user.sub);
  }
}
