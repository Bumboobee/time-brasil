import { colors } from "../../styles/design-system/colors";
import { breakPoints, spacing, fontSizes } from "../../styles/config";

import styled from "styled-components";
import YellowNoise from "/assets/images/noise/yellow-noise.svg";
import BlueNoise from "/assets/images/noise/blue-noise.svg";
import GreenNoise from "/assets/images/noise/green-noise.svg";

import PropTypes from "prop-types";

export const GlobalSection = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  padding: 0 72px;
  gap: calc(${spacing.xxxlarge} * 2);

  @media (max-width: ${breakPoints.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 ${spacing.xlarge};
    gap: ${spacing.xxxlarge};
  }

  @media (max-width: ${breakPoints.mobile}) {
    gap: ${spacing.xlarge};
    padding: ${spacing.large} ${spacing.small};
  }
`;

export const Aside = styled.aside`
  position: relative;
  padding: 100px 0;
  height: 100%;
  width: 100%;

  &:first-child {
    position: relative;
  }

  &:last-child {
    position: relative;

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 70px;
      right: -50px;
      gap: ${spacing.xsmall};
      transform: rotate(90deg);

      & > img {
        width: 40px;
      }

      & > span {
        font-family: "Hind";
        font-weight: 500;
        display: flex;
        align-items: center;
        background-size: cover;
        background-position: center;
        height: 100%;
        padding: ${spacing.xsmall} ${spacing.small};
        background-image: url(${GreenNoise});
        font-size: ${fontSizes.caption};
        color: ${colors.base.white};

        & > span {
          margin-right: ${spacing.xsmall};

          &:first-child {
            text-decoration: underline;
            font-weight: 700;
            color: ${colors.yellow.yellow_300};
          }
        }
      }
    }
  }
  @media (max-width: ${breakPoints.laptop}) {
    padding: 0;
  }

  @media (max-width: ${breakPoints.tablet}) {
    height: calc(85vh / 2);
  }

  &:nth-child(1) > div {
    background-image: url(${(props) => props.primary});
    background-size: cover;
    background-position: center;
    position: relative;

    & > div:nth-child(2) {
      right: -110px;
      top: 180px;
      width: 180px;
      height: 180px;
      background-image: url(${(props) => props.secondary});
      border: 8px solid ${colors.yellow.yellow_200};

      @media (max-width: ${breakPoints.mobile}) {
        right: -60px;
        top: 120px;
        width: 120px;
        height: 120px;
      }
    }

    & > div:last-child {
      left: -100px;
      bottom: -80px;
      width: 250px;
      height: 250px;
      background-image: url(${(props) => props.quinary});
      border: 14px solid ${colors.yellow.yellow_200};

      @media (max-width: ${breakPoints.mobile}) {
        width: 170px;
        height: 170px;
        bottom: -50px;
        left: -70px;
        border: 10px solid ${colors.yellow.yellow_200};
      }
    }
  }

  &:nth-child(2) > div {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;

    & > span {
      background-image: url(${YellowNoise});
      background-size: cover;
      background-position: center;
      height: 40px !important;
      width: 100%;
      border-bottom: 1px solid ${colors.base.white};
    }

    & > div:last-child {
      display: flex;
      flex-direction: row;
      height: 100%;

      & > div:first-child {
        background-image: url(${GreenNoise});
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding: ${spacing.xlarge} ${spacing.xlarge};

        @media (max-width: ${breakPoints.mobile}) {
          padding: ${spacing.medium};
        }
      }

      & > div:last-child {
        background-image: url(${BlueNoise});
        background-size: cover;
        background-position: center;
        width: 40px;
        border-left: 1px solid ${colors.base.white};
      }
    }

    & > div:nth-child(2) {
      background-image: url(${(props) => props.tertiary});
      top: -70px;
      right: -110px;
      width: 180px;
      height: 180px;

      @media (max-width: ${breakPoints.mobile}) {
        width: 140px;
        height: 140px;
        top: -50px;
        right: -70px;
      }
    }

    & > div:nth-child(3) {
      background-image: url(${(props) => props.quartenary});
      bottom: -70px;
      left: -100px;
      width: 210px;
      height: 210px;
      border: 14px solid ${colors.yellow.yellow_200};

      @media (max-width: ${breakPoints.mobile}) {
        width: 160px;
        height: 160px;
        bottom: -50px;
        left: -70px;
        border: 10px solid ${colors.yellow.yellow_200};
      }
    }

    & > div:nth-child(4) {
      background-image: url(${(props) => props.sextary});
      top: -90px;
      left: -120px;
      width: 190px;
      height: 190px;

      @media (max-width: ${breakPoints.mobile}) {
        display: none;
      }
    }
  }
`;

Aside.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  tertiary: PropTypes.string,
  quartenary: PropTypes.string,
  quinary: PropTypes.string,
  sextary: PropTypes.string,
};

export const ContentWraper = styled.div`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 480px;
  height: 100%;
  border: 1px solid ${colors.base.white};

  @media (min-width: ${breakPoints.desktop}) {
    width: 72%;
  }

  @media (max-width: ${breakPoints.desktop}) {
    width: 100%;
  }

  @media (max-width: calc(${breakPoints.laptop} + 120px)) {
    width: 420px;
  }

  @media (max-width: ${breakPoints.laptop}) {
    width: 100%;
    height: 480px !important;
  }

  @media (max-width: ${breakPoints.mobile}) {
    width: 70%;
    height: 100% !important;
  }
`;

export const Preview = styled.div`
  position: absolute;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  z-index: 10;
  border: 10px solid ${colors.yellow.yellow_200};

  @media (max-width: ${breakPoints.mobile}) {
    border: 8px solid ${colors.yellow.yellow_200};
  }
`;

export const Title = styled.h1`
  font-family: "Source Sans 3";
  font-weight: 900;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: ${spacing.medium};
  font-size: ${fontSizes.heading_2};
  color: ${colors.yellow.yellow_300};

  @media (max-width: calc(${breakPoints.desktop} + 80px)) {
    font-size: ${fontSizes.heading_2};
  }

  @media (max-width: ${breakPoints.laptop}) {
    font-size: ${fontSizes.heading_3};
  }

  @media (max-width: ${breakPoints.mobile}) {
    font-size: ${fontSizes.heading_5};
  }
`;

export const Paragraph = styled.p`
  font-family: "Hind";
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  margin-bottom: ${spacing.medium};
  font-size: ${fontSizes.heading_5};
  color: ${colors.blue.blue_300};

  @media (max-width: calc(${breakPoints.desktop} + 80px)) {
    font-size: ${fontSizes.heading_6};
  }

  @media (max-width: ${breakPoints.laptop}) {
    font-size: ${fontSizes.body};
  }

  @media (max-width: ${breakPoints.mobile}) {
    font-size: ${fontSizes.caption};
  }
`;

export const Credits = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  transform: rotate(90deg);
  left: -70px;
  gap: ${spacing.xsmall};
  margin-bottom: ${spacing.small};

  & > img {
    width: 32px;
  }

  & > a {
    text-decoration: none;
    font-family: "Hind";
    height: 32px;
    font-weight: 500;
    background-size: cover;
    background-position: center;
    transition: ease 0.4s;
    font-size: ${fontSizes.caption};
    color: ${colors.base.white};
    background-image: url(${GreenNoise});
    padding: ${spacing.small};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${breakPoints.desktop}) {
    left: -100px;
  }

  @media (max-width: ${breakPoints.mobile}) {
    top: 54px;
    left: -40px;
  }
`;
