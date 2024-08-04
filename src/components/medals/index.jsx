import * as Style from "./style";

import PropTypes from "prop-types";

import Gold from "/assets/images/medals/gold.svg";
import Silver from "/assets/images/medals/silver.svg";
import Bronze from "/assets/images/medals/bronze.svg";

const Medals = ({ medals }) => {
  const renderMedals = () => {
    return medals.map((medal) => {
      let MedalIcon;
      if (medal.name === "Ouro") MedalIcon = Gold;
      if (medal.name === "Prata") MedalIcon = Silver;
      if (medal.name === "Bronze") MedalIcon = Bronze;

      return Array.from({ length: medal.quantity }).map((_, index) => (
        <Style.MedalWrapper key={`${medal.name}-${index}`} medal={MedalIcon} />
      ));
    });
  };

  return <Style.MedalContainer>{renderMedals()}</Style.MedalContainer>;
};

Medals.propTypes = {
  medals: PropTypes.array,
};

export default Medals;
