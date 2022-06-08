import { ThemeProvider } from 'styled-components';
import palette from './palette';
import GlobalStyles from './globalStyles';
import React, { FC } from 'react';

const theme = {
  palette,
};

interface ThemeConfigProps {
  children: React.ReactNode;
}

const ThemeConfig: FC<ThemeConfigProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
