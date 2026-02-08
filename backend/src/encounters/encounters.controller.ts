import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { EncountersService } from './encounters.service';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('encounters')
@UseGuards(JwtAuthGuard)
export class EncountersController {
  constructor(private readonly encountersService: EncountersService) {}

  @Post()
  create(@Body() dto: CreateEncounterDto, @Req() req: { user: { sub: string } }) {
    return this.encountersService.create(dto, req.user.sub);
  }
}
