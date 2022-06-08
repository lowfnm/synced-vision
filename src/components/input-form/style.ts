import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const Content = styled.div`
  display: flex;
  gap: 10px;
  width: 350px;
`;

export const Input = styled(MuiInput)`
  flex: 1;

  && {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.palette.common.grey};
    border-radius: 5px;

    &::after,
    &:before {
      width: 99%;
      margin: 0 auto;
    }
  }
`;

export const Button = styled(MuiButton)`
  && {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.palette.common.dodger_blue};

    &:hover {
      background-color: ${({ theme }) => theme.palette.common.dodger_blue};
      opacity: 0.7;
    }
  }
`;

export const CustomAddIcon = styled(AddIcon)`
  && {
    fill: ${({ theme }) => theme.palette.common.white};
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    color: red;
  }
`;
