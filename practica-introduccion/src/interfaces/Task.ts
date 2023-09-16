export interface Task {
  id?: number; //con el ? se dice que es opcional.
  title: string;
  description: string;
  done: boolean;
}
