import { createGlobalStyle } from "styled-components";
import { colors } from "./design-system/colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
  }

  /* section, aside, nav, div, button, span, p, h1, h2, h3, h4, h5, h6, a, img, input, textarea, select, option, label, form, ul, li, ol, img {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  p, h1, h2, h3, h4, h5, h6 {  
    line-height: 120%;
  } */
`;

export default GlobalStyle;
