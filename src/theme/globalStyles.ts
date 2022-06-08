import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: inherit
    }
   
    html {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    
    body {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }
`;

export default GlobalStyles;
