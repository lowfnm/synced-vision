import styled from 'styled-components';

export const Header = styled.header`
  text-align: center;
  font-size: 24px;
`;

export const Main = styled.main`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  margin-top: 10px;
  width: 375px;
  border-top: 2px solid ${({ theme }) => theme.palette.common.grey};
`;
