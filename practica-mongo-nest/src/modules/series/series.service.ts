import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Serie } from '../../schemas/serie.schema';
import { Model } from 'mongoose';

@Injectable()
export class SeriesService {
  constructor(@InjectModel(Serie.name) private serieModel: Model<Serie>) {}

  findAll() {
    this.serieModel.find();
  }

  async create(createdSerie: any) {
    const newSerie = new this.serieModel(createdSerie);
    await newSerie.save();
    return newSerie;
  }

  async findOne(id: string) {
    return this.serieModel.findById(id);
  }

  async delete(id: string) {
    return this.serieModel.findByIdAndDelete(id);
  }

  async update(id: string, serie: any) {
    return this.serieModel.findByIdAndUpdate(id, serie);
  }
}
