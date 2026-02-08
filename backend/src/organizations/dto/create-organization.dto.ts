import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  legalName!: string;

  @IsString()
  @IsNotEmpty()
  tradeName!: string;

  @IsString()
  @IsNotEmpty()
  rcNumber!: string;

  @IsString()
  @IsNotEmpty()
  ifNumber!: string;

  @IsString()
  @IsOptional()
  ice?: string;

  @IsString()
  @IsNotEmpty()
  legalForm!: string;
}
