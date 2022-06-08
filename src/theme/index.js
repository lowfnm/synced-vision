import { ThemeProvider } from 'styled-components';
import palette from './palette';
import GlobalStyles from './globalStyles';

const theme = {
  palette,
};

// interFace ThemeProps = {
//   children: ReactNode,
// }

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
