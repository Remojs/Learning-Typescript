import { Document } from 'mongoose';

export interface Task extends Document {
  id?: number; //con el ? se dice que es opcional.
  title: string;
  description: string;
  done: boolean;
}
