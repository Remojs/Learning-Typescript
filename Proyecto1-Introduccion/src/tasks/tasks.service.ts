//el service de nest sirve para encapsular logica y reutilizarla.
//Sus principales ventajas son Separacion de preocupaciones, Organizacion y Reutilizacion de codigo.
//Ayuda a mantener la aplicacion organizada, mantenible y escalable

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createTaskDto } from '../dto/create-task.dto';
import { Task } from 'src/interfaces/Task'; //necesitamos crear nuestro propio tipo de dato
@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async getTasks() {
    return await this.taskModel.find();
  }

  async getTask(id: string) {
    return await this.taskModel.findById(id);
  }

  async createTask(task: createTaskDto) {
    const newtTask = new this.taskModel(task);
    await newtTask.save();
    return 'saved';
  }
}
