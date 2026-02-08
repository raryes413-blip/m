import { IsNotEmpty, IsString } from 'class-validator';

export class DispenseDto {
  @IsString()
  @IsNotEmpty()
  qrPayload!: string;
}
