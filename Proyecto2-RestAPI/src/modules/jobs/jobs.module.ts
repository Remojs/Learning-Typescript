import { Module } from '@nestjs/common';
import { JobsController } from './controllers/getAllJobs.controller';
import { DeleteJobsService } from './services/deleteJobs.service';
import { GetJobsService } from './services/getAllJobs.service';
import { CreateJobsService } from './services/createJobs.service';
import { UpdateJobsService } from './services/updateJobs.service';

@Module({
  controllers: [JobsController],
  providers: [
    DeleteJobsService,
    GetJobsService,
    CreateJobsService,
    UpdateJobsService,
  ],
})
export class JobsModule {}
