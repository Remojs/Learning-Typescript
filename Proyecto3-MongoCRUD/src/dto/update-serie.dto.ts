import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class UpdateSerieDTO {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  episodes: number;

  @IsBoolean()
  @IsOptional()
  finished?: boolean;
}
