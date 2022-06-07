import { ThemeProvider } from 'styled-components';
import palette from './palette';
import GlobalStyles from './globalStyles';

const theme = {
  palette,
};

const ThemeConfig = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
