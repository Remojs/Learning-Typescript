import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get() //decorador - Se puede especificar una sub-ruta de esta manera @Get('/taskList'), por lo que esta nueva ruta seria 'tasks/taskList'
  getTasks(): string {
    //especifico el tipo de dato
    return 'Hello World!';
  }

  @Post('postTask')
  createTask(): string {
    return 'Creating a task'
  }

  @Put('updateTask')
  editTask(): string {
    return 'Editing a task';
  }

  @Delete('deleteTask')
  deleteTask(): string {
    return 'Deleting a task';
  }
}
