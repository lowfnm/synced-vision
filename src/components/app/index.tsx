import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Hero from '../hero';
import TodoList from '../todo-list';

import * as S from './style';
import { addTodo } from 'src/store/todo-slice';

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => dispatch(addTodo({ text }));

  return (
    <>
      <S.Header>TodoList App</S.Header>
      <S.Main>
        <Hero addTask={addTask} />
        <TodoList />
      </S.Main>
    </>
  );
};

export default App;
