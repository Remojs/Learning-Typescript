import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { CreateJobDTO } from 'src/dto/create-job.dto';
import { JobService } from '../services/jobs.service';
import { EditJobDTO } from 'src/dto/edit-job-dto';

@Controller('job')
export class JobController {
  constructor(private jobService: JobService) {}

  @Get()
  findAll() {
    return this.jobService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const job = await this.jobService.findOne(id);
    if (!job) {
      throw new NotFoundException('Serie no encontrada');
    }
    return job;
  }

  @Post()
  createOne(@Body() body: CreateJobDTO) {
    try {
      return this.jobService.create(body);
    } catch (error) {
      if (error.code == 11000) {
        throw new ConflictException('La serie ya existe');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteOne(@Param('id') id: string) {
    const job = await this.jobService.delete(id);
    if (!job) {
      throw new NotFoundException('Serie no encontrada');
    }
    return job;
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() body: EditJobDTO) {
    const job = await this.jobService.update(id, body);
    if (!job) {
      throw new NotFoundException('Serie no encontrada');
    }
    return job;
  }
}
