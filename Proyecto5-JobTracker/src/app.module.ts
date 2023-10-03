import { Module } from '@nestjs/common';
import { JobModule } from './modules/jobs/jobs.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [JobModule, MongooseModule.forRoot(process.env.MONGO)],
})
export class AppModule {}
