import { Controller, Get } from '@nestjs/common';
import { GetJobsService } from '../services/getAllJobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private getJobsService: GetJobsService) {}

  @Get()
  getjobs() {
    return this.getJobsService.getAllJobs();
  }
}
