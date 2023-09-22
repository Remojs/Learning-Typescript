import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteJobsService {
  deleteJobs(id: string) {
    console.log(id);
    //this.tasks = this.deleteJobs.filter((job) => job.id !== id);
    // aqui se actualiza el array con informacion, en caso de ser una base de datos actualizaria la base con sus metodos correctos.
  }
}
