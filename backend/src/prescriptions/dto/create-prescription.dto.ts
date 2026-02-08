import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePrescriptionDto {
  @IsString()
  @IsNotEmpty()
  encounterId!: string;

  @IsString()
  @IsNotEmpty()
  patientId!: string;
}
