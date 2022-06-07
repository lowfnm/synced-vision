import styled from 'styled-components';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Content = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.palette.common.grey};
  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const IconWrapper = styled.button`
  padding: 3px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.common.saffron};
  border: none;
  border-radius: 5px;
  transition: 1s linear opacity;

  &:hover {
    opacity: 0.7;
  }
`;

export const CustomDeleteIcon = styled(DeleteOutlineIcon)`
  && {
    fill: ${({ theme }) => theme.palette.common.black};
  }
`;
