export interface ITodoItem {
  id: number;
  label: string;
  description: string;
  start: Date;
  end: Date;
  status: string;
}

export interface ITodoList {
  todos: ITodoItem[];
}

export interface IAddTodo {
  description: string;
}

export interface IEditTodo {
  label: string;
  status: string;
  id: number;
}

export interface IDeleteTodo {
  id: number;
}