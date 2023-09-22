import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteJobsService } from '../services/deleteJobs.service';

@Controller('jobs')
export class DeleteJobsController {
  constructor(private deleteJobsService: DeleteJobsService) {}

  @Delete(':id')
  deletejobs(@Param(':id') id: string) {
    return this.deleteJobsService.deleteJobs(id);
  }
}
