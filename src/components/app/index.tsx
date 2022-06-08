import InputForm from '../input-form';
import TodoList from '../todo-list';

import * as S from './style';

const App = () => {
  return (
    <>
      <S.Header>TodoList App</S.Header>
      <S.Main>
        <InputForm />
        <S.Line />
        <TodoList />
      </S.Main>
    </>
  );
};

export default App;
