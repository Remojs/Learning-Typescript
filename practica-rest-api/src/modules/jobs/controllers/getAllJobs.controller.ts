import { Controller, Get } from '@nestjs/common';
import { GetJobsService } from '../services/getAllJobs.service';

@Controller('jobs')
export class GetJobsController {
  constructor(private getJobsService: GetJobsService) {}

  @Get()
  getjobs() {
    return this.getJobsService.getAllJobs();
  }
}
