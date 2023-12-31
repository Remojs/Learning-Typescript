/*
Este es el indice del modulo task, se referencian todas sus partes
- en imports van sub-modules del task module
- en controllers van los controladores de task.module
- en providers van los provedores, que son los services del archivo .service.ts 
*/

import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from '../schemas/task.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
