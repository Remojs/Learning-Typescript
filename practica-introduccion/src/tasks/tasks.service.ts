//el service de nest sirve para encapsular logica y reutilizarla.
//Sus principales ventajas son Separacion de preocupaciones, Organizacion y Reutilizacion de codigo.
//Ayuda a mantener la aplicacion organizada, mantenible y escalable

import { Injectable } from '@nestjs/common';

import { Task } from 'src/interfaces/Task'; //necesitamos crear nuestro propio tipo de dato
@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'testing',
      description: 'testing description',
      done: true,
    },
    {
      id: 2,
      title: 'testing2',
      description: 'testing description2',
      done: true,
    },
    {
      id: 3,
      title: 'testing3',
      description: 'testing description3',
      done: true,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
