import { IsBoolean, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class AddItemDto {
  @IsString()
  @IsNotEmpty()
  medicationName!: string;

  @IsString()
  @IsNotEmpty()
  dose!: string;

  @IsInt()
  @Min(1)
  durationDays!: number;

  @IsBoolean()
  substitutionAllowed!: boolean;
}
