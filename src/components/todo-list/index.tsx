import { useSelector } from 'react-redux';
import Todo from '../../common/todo';

import * as S from './style';
import { TodoProps } from '../../interfaces';

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos.todos);

  return (
    <S.Content>
      {todos?.map((todo: JSX.IntrinsicAttributes & TodoProps) => (
        <Todo key={todo.id} {...todo} />
      ))}
      {todos.length >= 1 && <h2>Done</h2>}
    </S.Content>
  );
};

export default TodoList;
