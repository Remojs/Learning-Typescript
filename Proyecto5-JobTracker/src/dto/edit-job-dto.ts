import { IsString, IsOptional, IsDate } from 'class-validator';

export class EditJobDTO {
  @IsDate()
  @IsOptional()
  date: Date;

  @IsString()
  @IsOptional()
  jobTitle: string;

  @IsString()
  @IsOptional()
  company: string;

  @IsString()
  @IsOptional()
  mainStack: string;

  @IsString()
  @IsOptional()
  platform: string;

  @IsString()
  @IsOptional()
  link: string;

  @IsOptional()
  recruiter: string;
}
