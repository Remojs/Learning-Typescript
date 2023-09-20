import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Serie } from '../../schemas/serie.schema';
import { Model } from 'mongoose';

@Injectable()
export class SeriesService {
  constructor(@InjectModel(Serie.name) private taskModel: Model<Serie>) {}
}
