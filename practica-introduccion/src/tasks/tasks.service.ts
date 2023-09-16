//el service de nest sirve para encapsular logica y reutilizarla.
//Sus principales ventajas son Separacion de preocupaciones, Organizacion y Reutilizacion de codigo.
//Ayuda a mantener la aplicacion organizada, mantenible y escalable

import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {}
