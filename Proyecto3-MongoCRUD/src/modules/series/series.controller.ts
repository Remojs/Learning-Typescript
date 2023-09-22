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
  async findOne(@Param('id') id: string) {
    const serie = await this.seriesService.findOne(id);
    if (!serie) {
      throw new NotFoundException('Serie no encontrada');
    }
    return serie;
  }

  @Post()
  createOne(@Body() body: CreateSerieDTO) {
    try {
      return this.seriesService.create(body);
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
    const serie = await this.seriesService.delete(id);
    if (!serie) {
      throw new NotFoundException('Serie no encontrada');
    }
    return serie;
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() body: any) {
    const serie = await this.seriesService.update(id, body);
    if (!serie) {
      throw new NotFoundException('Serie no encontrada');
    }
    return serie;
  }
}
