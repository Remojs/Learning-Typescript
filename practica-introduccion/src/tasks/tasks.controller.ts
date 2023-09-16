import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  Res,
} from '@nestjs/common';

import { createTaskDto } from '../dto/create-task.dto'; //traigo el dto
import { TasksService } from './tasks.service';
import { Task } from 'src/interfaces/Task'; //traigo el tipo de dato Task

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('taskService') //hacemos un controller con el task service de getTasks()
  getTasksService(): Task[] {
    return this.taskService.getTasks();
  }

  @Get('taskService/:taskId') //hacemos un controller con el task service de getTask()
  getTaskService(@Param('taskId') taskId: string) {
    return this.taskService.getTask(parseInt(taskId));
  }

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

  @Put(':id')
  editTaskId(@Body() task: createTaskDto, @Param('id') id): string {
    console.log(task);
    console.log(id);
    return 'Editing a task';
  }

  //usando controller con express, res, req
  //no se recomienda, mejor usar nest puro
  @Get()
  getTasksExpress(@Req() req, @Res() res) {
    return res.send('Hello World!');
  }
}
