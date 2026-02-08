import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEncounterDto {
  @IsString()
  @IsNotEmpty()
  patientId!: string;

  @IsString()
  @IsNotEmpty()
  notes!: string;
}
