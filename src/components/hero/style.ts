import styled from 'styled-components';
import { Button as MuiButton, Input as MuiInput } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const Content = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled(MuiInput)`
  && {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.palette.common.grey};
    border-radius: 5px;

    &::after,
    &:before {
      border: none;
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

export const CustomErrorIcon = styled(ErrorOutlineIcon)`
  && {
    width: 20px;
    height: 20px;
    fill: red;
  }
`;
