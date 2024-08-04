import styled from "styled-components";
import { breakPoints, spacing } from "../../styles/config";

export const MedalContainer = styled.section`
  position: absolute;
  display: flex;
  justify-content: end;
  width: 100%;
  height: 130px;
  top: 0;
  right: 20px;
  z-index: 1;
  padding-right: ${spacing.xxxlarge};
  gap: ${spacing.large};

  @media (max-width: ${breakPoints.laptop}) {
    height: 100px;
  }

  @media (max-width: ${breakPoints.mobile}) {
    height: 62px;
    right: 0;
    padding-right: 0;
    gap: ${spacing.medium};
  }
`;

export const MedalWrapper = styled.span`
  background-image: url(${(props) => props.medal});
  background-size: cover;
  background-position: center;
  display: block;
  width: 72px;
  height: 100%;

  @media (max-width: ${breakPoints.laptop}) {
    width: 60px;
  }

  @media (max-width: ${breakPoints.mobile}) {
    width: 40px;
  }
`;
