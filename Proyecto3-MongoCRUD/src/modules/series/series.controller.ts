import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSerieDTO } from 'src/dto/create-serie.dto';

@Controller('series')
export class SeriesController {
  constructor(private seriesService: SeriesService) {}

  @Get()
  findAll() {
    return this.seriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesService.findOne(id);
  }

  @Post()
  createOne(@Body() body: CreateSerieDTO) {
    return this.seriesService.create(body);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.seriesService.delete(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() body: any) {
    return this.seriesService.update(id, body);
  }
}
