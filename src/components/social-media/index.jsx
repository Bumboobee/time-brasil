import { SocialMediaContainer } from "./style";
import Instagram from "/assets/images/instagram.svg";

import PropTypes from "prop-types";

const SocialMedia = ({ socialMediaLink }) => {
  return (
    <SocialMediaContainer>
      <img src={Instagram} />
      <span>
        <a href={`https://www.instagram.com/${socialMediaLink}`}>
          @{socialMediaLink}
        </a>
      </span>
    </SocialMediaContainer>
  );
};

SocialMedia.propTypes = {
  socialMediaLink: PropTypes.string,
};

export default SocialMedia;
