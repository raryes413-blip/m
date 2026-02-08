import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('patients')
@UseGuards(JwtAuthGuard)
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() dto: CreatePatientDto) {
    return this.patientsService.create(dto);
  }

  @Get()
  search(@Query('query') query?: string) {
    return this.patientsService.search(query);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.patientsService.getById(id);
  }
}
