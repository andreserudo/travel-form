import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
 
  html,
  body {
    margin: 0;
    padding: 0;    
  }
  /* Full height layout */
  html, body, #__next {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyle;
