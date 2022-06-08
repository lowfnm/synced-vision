import * as S from './style';

const InputForm = ({ value, updateText, handleAction }) => {
  return (
    <S.Content>
      <S.Input
        placeholder="New task"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />

      <S.Button onClick={handleAction}>
        <S.CustomAddIcon />
      </S.Button>
    </S.Content>
  );
};

export default InputForm;
