import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateJobsService {
  createJobs(
    title: string,
    id: string,
    position: string,
    company: string,
    link: string,
  ) {
    const job = { title, id, position, company, link };
    return job;
    //this.jobs.push() |||| esto pushea a la db, la cual no tenemos en esta practica.
  }
}
