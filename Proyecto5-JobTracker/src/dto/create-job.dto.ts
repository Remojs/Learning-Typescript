import { IsString, IsOptional, IsNotEmpty, IsDate } from 'class-validator';

export class CreateJobDTO {
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  mainStack: string;

  @IsString()
  @IsNotEmpty()
  platform: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsOptional()
  recruiter: string;
}
