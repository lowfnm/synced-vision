export interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

export interface TodoListProps {
  todos?: Todo[];
}

export interface TodoProps {
  todo: Todo;
}
