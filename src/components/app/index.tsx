import * as S from './style';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from '../todo-list';
import { addTodo } from '../../store/todo-slice';
import InputForm from '../input-form';

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  return (
    <>
      <S.Header>TodoList App</S.Header>
      <S.Main>
        <InputForm
          value={text}
          updateText={setText}
          handleAction={handleAction}
        />
        <TodoList />
      </S.Main>
    </>
  );
};

export default App;
