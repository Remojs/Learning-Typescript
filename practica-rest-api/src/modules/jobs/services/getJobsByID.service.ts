import { Injectable } from '@nestjs/common';

@Injectable()
export class GetJobsService {
  getAllJobs() {
    return [
      {
        id: '1',
        title: 'trabajo',
        position: 'FULLSTACK',
        company: 'uala',
        link: 'www.uala.com',
      },
    ];
  }
}
