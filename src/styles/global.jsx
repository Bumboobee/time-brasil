import { styled, createGlobalStyle } from "styled-components";
import { breakPoints } from "./config";
import { colors } from "./design-system/colors";
import Background from "/assets/images/background.svg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;

    &::before {
      content: '';
      position: fixed; /* Ensures the overlay covers the entire viewport */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.301);
      z-index: -1;
      pointer-events: none;
    }
  }

  body, html  {
    height: 100%;
    overflow: hidden;
  }

  section, aside, nav, div, button, span, p, h1, h2, h3, h4, h5, h6, a, img, input, textarea, select, option, label, form, ul, li, ol, img {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  p, h1, h2, h3, h4, h5, h6 {  
    line-height: 120%;
  }
`;

export const GlobalSection = styled.section`
  max-width: ${breakPoints.desktop};
  display: flex;
  position: relative;
  margin: 0 auto;
  flex-direction: column;

  @media (max-width: ${breakPoints.desktop}) {
  }
`;

export default GlobalStyle;
