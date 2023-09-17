import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './modules/jobs/jobs.module';
import { DeleteJobsService } from './modules/jobs/services/deleteJobs.service';
import { GetJobsService } from './modules/jobs/services/getAllJobs.service';
import { CreateJobsService } from './modules/jobs/services/createJobs.service';
import { UpdateJobsService } from './modules/jobs/services/updateJobs.service';
@Module({
  imports: [JobsModule],
  controllers: [AppController],
  providers: [
    AppService,
    DeleteJobsService,
    GetJobsService,
    CreateJobsService,
    UpdateJobsService,
  ],
})
export class AppModule {}
