// import { FC } from 'react';
import { useSelector } from 'react-redux';

import Todo from 'src/common/todo';
import * as S from './style';
// import { TodoListProps, TodoProps } from 'src/globalTypes';

const TodoList = () => {
  // @ts-ignore
  const todos = useSelector((state) => state.todos.todos);

  console.log(todos);
  return (
    <S.Content>
      {todos.map((todo: any) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </S.Content>
  );
};

export default TodoList;
