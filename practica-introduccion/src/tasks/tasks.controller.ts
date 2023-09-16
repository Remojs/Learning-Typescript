import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { createTaskDto } from '../dto/create-task.dto'; //traigo el dto

@Controller('tasks')
export class TasksController {
  @Get() //decorador - Se puede especificar una sub-ruta de esta manera @Get('/taskList'), por lo que esta nueva ruta seria 'tasks/taskList'
  getTasks(): string {
    //especifico el tipo de dato
    return 'Hello World!';
  }

  //tambien se puede enviar json como respuesta en el return
  @Get('jsonTask')
  getTasksJson(): { hello: string } {
    return { hello: 'world' };
  }

  @Post('postTask')
  createTask(@Body() task: createTaskDto /* Indico el DTO*/): string {
    console.log(task.title, task.description, task.done);
    //recibe la tarea desde el cliente, se puede squematizar los datos que llegan con DTO Schemas.
    return 'Creating a task';
  }

  @Put('updateTask')
  editTask(): string {
    return 'Editing a task';
  }

  @Delete('deleteTask')
  deleteTask(): string {
    return 'Deleting a task';
  }

  //controller con ruta con parametro

  @Delete(':id')
  deleteTaskId(@Param('id') id): string {
    console.log(id);
    return `Deleting a task with id ${id}`;
  }
}
