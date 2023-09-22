import { Module } from '@nestjs/common';
import { SeriesModule } from './modules/series/series.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [SeriesModule, MongooseModule.forRoot(process.env.MONGO)],
})
export class AppModule {}
