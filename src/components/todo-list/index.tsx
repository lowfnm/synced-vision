import { useSelector } from 'react-redux';

import { TodoProps } from '../../interfaces';
import Todo from '../../common/todo';

import * as S from './style';

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos.todos);

  const checkedTodo = todos.filter(
    (todo: JSX.IntrinsicAttributes & TodoProps) => todo?.isCompleted && todo
  );

  const unCheckedTodo = todos.filter(
    (todo: JSX.IntrinsicAttributes & TodoProps) => !todo?.isCompleted && todo
  );

  return (
    <>
      {todos.length >= 1 && (
        <S.Container>
          <ul>
            {unCheckedTodo?.map((todo: JSX.IntrinsicAttributes & TodoProps) => (
              <Todo key={todo.id} {...todo} />
            ))}
          </ul>
          <S.Title>Done</S.Title>
          <ul>
            {checkedTodo?.map((todo: JSX.IntrinsicAttributes & TodoProps) => (
              <Todo key={todo.id} {...todo} />
            ))}
          </ul>
        </S.Container>
      )}
    </>
  );
};

export default TodoList;
