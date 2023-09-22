import {
  IsString,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateSerieDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  episodes: number;

  @IsBoolean()
  @IsOptional()
  finished?: boolean;
}
