import styled from "styled-components";
import { breakPoints, fontSizes, spacing } from "../../styles/config";
import { colors } from "../../styles/design-system/colors";
import YellowNoise from "/assets/images/noise/yellow-noise.svg";

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: ${spacing.small};

  & > img {
    width: 26px;
  }

  & > span {
    z-index: 20;
    font-size: ${fontSizes.heading_6};

    @media (max-width: ${breakPoints.mobile}) {
      font-size: ${fontSizes.body};
    }

    & > a {
      text-decoration: none;
      background-size: cover;
      background-position: center;
      font-weight: 600;
      font-family: "Source Sans 3";
      transition: ease .4s;
      font-size: ${fontSizes.caption};
      background-image: url(${YellowNoise});
      padding: ${spacing.xsmall};
      color: ${colors.base.black};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
