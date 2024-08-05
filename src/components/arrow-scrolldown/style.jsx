import styled from "styled-components";
import { breakPoints } from "../../styles/config";
import { colors } from "../../styles/design-system/colors";

export const Container = styled.div`
  position: absolute;
  right: 50%;
  bottom: 20px;
  width: 20px;
  -webkit-transform: translateX(-50%);
`;

export const SingleArrow = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  transform: rotate(45deg);
  border-right: 2px solid ${colors.base.white};
  border-bottom: 2px solid ${colors.base.white};
  margin: 0 0 3px 5px;
  -webkit-animation: scroll-down 1s infinite;
  -moz-animation: scroll-down 1s infinite;

  &:nth-child(1) {
    margin-top: 6px;
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -webkit-animation-direction: alternate;
  }

  &:nth-child(2) {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-direction: alternate;
  }

  &:nth-child(3) {
    -webkit-animation-delay: 0.3s;
    -moz-animation-dekay: 0.3s;
    -webkit-animation-direction: alternate;
  }

  @-webkit-keyframes scroll-down {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes scroll-down {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
