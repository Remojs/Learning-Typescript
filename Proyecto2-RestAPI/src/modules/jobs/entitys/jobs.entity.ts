enum PositionOptions {
  BACKEND = 'BACKEND',
  FRONTEND = 'FRONTEND',
  FULLSTACK = 'FULLSTACK',
}

export class Job {
  id: string;
  title: string;
  position: PositionOptions;
  company: string;
  link: string;
}
