// import { FC } from 'react';

import * as S from './style';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../../store/todo-slice';
import { date } from '../../helpers/date';
// import { TodoProps } from '../../interfaces';

const Todo = (props) => {
  const { id, text, isCompleted } = props;
  const dispatch = useDispatch();

  return (
    <S.Content key={id}>
      <div>
        <div>
          <S.CustomCheckBox
            checked={isCompleted}
            onChange={() => dispatch(toggleComplete({ id }))}
          />
        </div>
        {text}
      </div>
      <div>
        {date}
        <S.IconWrapper onClick={() => dispatch(removeTodo({ id }))}>
          <S.CustomDeleteIcon />
        </S.IconWrapper>
      </div>
    </S.Content>
  );
};

export default Todo;
