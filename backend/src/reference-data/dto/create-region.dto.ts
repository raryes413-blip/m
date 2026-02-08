import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRegionDto {
  @IsString()
  @IsNotEmpty()
  code!: string;

  @IsString()
  @IsNotEmpty()
  nameAr!: string;

  @IsString()
  @IsNotEmpty()
  nameFr!: string;
}
