import { Controller, Post, Body } from '@nestjs/common';
import { CreateJobsService } from '../services/createJobs.service';
import { CreateJobDTO } from '../dto/jobs.dto';

@Controller('jobs')
export class CreateJobsController {
  constructor(private createJobsService: CreateJobsService) {}

  @Post()
  createjobs(@Body() newJob: CreateJobDTO) {
    return this.createJobsService.createJobs(
      newJob.company,
      newJob.id,
      newJob.link,
      newJob.position,
      newJob.title,
    );
  }
}
