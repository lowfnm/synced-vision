export interface TodoProps {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TodoListProps {
  todos?: TodoProps[];
}
