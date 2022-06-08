import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todo-slice';

import * as S from './style';

const InputForm = () => {
  const firstLetterReg = new RegExp(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/);

  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = handleSubmit((data) => {
    dispatch(addTodo(data.newTask));
    reset();
  });

  return (
    <>
      <S.Content onSubmit={onSubmit}>
        <S.Input
          {...register('newTask', {
            required: 'Input is empty',
            minLength: 4,
            pattern: {
              value: firstLetterReg,
              message: 'The first character must be a letter',
            },
          })}
          type="text"
          placeholder="New task"
        />
        <S.Button type="submit">
          <S.CustomAddIcon />
        </S.Button>
      </S.Content>
      {errors?.newTask && (
        <S.ErrorMessage>
          <span>{errors?.newTask?.message}</span>
        </S.ErrorMessage>
      )}
      {errors?.newTask && errors?.newTask?.type === 'minLength' && (
        <S.ErrorMessage>
          <span>Min length 3 characters</span>
        </S.ErrorMessage>
      )}
    </>
  );
};

export default InputForm;
