import {
  FC,
  useState,
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  FormEventHandler,
} from 'react';
import { useForm } from 'react-hook-form';

import * as S from './style';

interface HeroProps {
  addTask: (userInput: string) => void;
}

const Hero: FC<HeroProps> = ({ addTask }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onSubmit' });

  const [userInput, setUserInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setUserInput(e.currentTarget.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
    addTask(userInput);
  };

  // const handleKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
  //   if (e.key === 'Enter') handleSubmit(e)
  // };

  return (
    <form onSubmit={onSubmit}>
      <S.Content>
        <S.Input
          {...register('newTask', {
            required: 'Input is empty',
            minLength: 4,
          })}
          type="text"
          value={userInput}
          onChange={handleChange}
          // onKeyDown?={handleKeyPress}
          placeholder="New task"
        />
        <S.Button type="submit">
          <S.CustomAddIcon />
        </S.Button>
      </S.Content>
      {errors?.newTask && (
        <S.ErrorMessage>
          {/*<S.CustomErrorIcon />*/}
          <span>{errors?.newTask?.message}</span>
        </S.ErrorMessage>
      )}
      {errors?.newTask && errors?.newTask?.type === 'minLength' && (
        <S.ErrorMessage>
          <S.CustomErrorIcon />
          <span>Min length 3 characters</span>
        </S.ErrorMessage>
      )}
    </form>
  );
};

export default Hero;
