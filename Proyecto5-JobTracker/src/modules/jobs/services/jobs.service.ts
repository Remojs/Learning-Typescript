import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from 'src/schema/job.schema';
import { Model } from 'mongoose';
import { EditJobDTO } from 'src/dto/edit-job-dto';
import { CreateJobDTO } from 'src/dto/create-job.dto';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private jobModel: Model<Job>) {}

  findAll() {
    this.jobModel.find();
  }

  async create(createdJob: CreateJobDTO) {
    const newJob = new this.jobModel(createdJob);
    await newJob.save();
    return newJob;
  }

  async findOne(id: string) {
    return this.jobModel.findById(id);
  }

  async delete(id: string) {
    return this.jobModel.findByIdAndDelete(id);
  }

  async update(id: string, job: EditJobDTO) {
    return this.jobModel.findByIdAndUpdate(id, job);
  }
}
