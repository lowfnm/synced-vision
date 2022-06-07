// import { FC } from 'react';
// import { TodoProps } from 'src/globalTypes';

import Checkbox from '@mui/material/Checkbox';

import * as S from './style';
import { useDispatch } from 'react-redux';
import { removeTodo } from 'src/store/todo-slice';

const Todo = (props: any) => {
  const dispatch = useDispatch();

  return (
    <S.Content key={props.id}>
      <div>
        <Checkbox />
        {props.text}
      </div>
      <div>
        <p>ds</p>
        <S.IconWrapper onClick={() => dispatch(removeTodo(props.id))}>
          <S.CustomDeleteIcon />
        </S.IconWrapper>
      </div>
    </S.Content>
  );
};

export default Todo;
