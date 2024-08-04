import styled from "styled-components";
import { colors } from "../../styles/design-system/colors";
import { breakPoints } from "../../styles/config";

export const BorderWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  span {
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: ${colors.base.white};

    &:nth-child(1) {
      top: -8px;
      left: -8px;
    }

    &:nth-child(2) {
      top: -8px;
      right: -8px;
    }

    &:nth-child(3) {
      bottom: -8px;
      left: -8px;
    }

    &:nth-child(4) {
      bottom: -8px;
      right: -8px;
    }

    @media (max-width: ${breakPoints.mobile}) {
      width: 8px;
      height: 8px;

      &:nth-child(1) {
        top: -4px;
        left: -4px;
      }

      &:nth-child(2) {
        top: -4px;
        right: -4px;
      }

      &:nth-child(3) {
        bottom: -4px;
        left: -4px;
      }

      &:nth-child(4) {
        bottom: -4px;
        right: -4px;
      }
    }
  }
`;
