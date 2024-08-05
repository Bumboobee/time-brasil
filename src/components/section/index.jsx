import React, { useState, useEffect } from "react";
import JSConfetti from "js-confetti";
import axios from "axios";

import * as Style from "./style";
import Medals from "../medals";
import Border from "../border";
import SocialMedia from "../social-media";
import TimeBrazil from "/assets/time-brazil.jpg";
import ArrowScroollDown from "../arrow-scrolldown";

import { data } from "./../../data";
const jsConfetti = new JSConfetti();

const Section = () => {
  const [currentAthlete, setCurrentAthlete] = useState(data[0]);
  const [touchStartY, setTouchStartY] = useState(null);
  const [brasilData, setBrasilData] = useState([]);
  const [isLastAthlete, setIsLastAthlete] = useState(data.length === 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis.codante.io/olympic-games/countries"
        );
        setBrasilData(
          response.data.data.find((country) => country.id === "BRA")
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const splitDescriptionIntoParagraphs = (description) => {
    return description.split("\n").map((text, index) => (
      <React.Fragment key={index}>
        {index > 0}
        <Style.Paragraph>{text}</Style.Paragraph>
      </React.Fragment>
    ));
  };

  const updateAthlete = (direction) => {
    setCurrentAthlete((prev) => {
      const currentIndex = data.indexOf(prev);
      const newIndex = currentIndex + direction;

      if (newIndex >= 0 && newIndex < data.length) {
        setIsLastAthlete(newIndex === data.length - 1);
        return data[newIndex];
      }
      return prev;
    });
  };

  const handleScroll = (event) => {
    const direction = event.deltaY > 0 ? 1 : -1;
    updateAthlete(direction);
  };

  const handleTouchStart = (event) => {
    setTouchStartY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    const touchEndY = event.changedTouches[0].clientY;
    const direction = touchStartY > touchEndY ? 1 : -1;
    updateAthlete(direction);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      const direction = event.key === "ArrowDown" ? 1 : -1;
      updateAthlete(direction);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [touchStartY]);

  useEffect(() => {
    const hasGoldOrSilverMedal = currentAthlete.medals?.some(
      (medal) =>
        (medal.name === "Ouro" || medal.name === "Prata") && medal.quantity > 0
    );

    if (hasGoldOrSilverMedal) {
      jsConfetti.addConfetti({
        confettiRadius: 4,
        confettiSize: { width: 10, height: 10 },
        confettiNumber: 2200,
        confettiColors: ["#009c3b", "#ffdf00", "#002776", "#ffffff"],
      });
    }
  }, [currentAthlete]);

  return (
    <>
      <Style.GlobalSection>
        <Style.Aside
          primary={currentAthlete.images[0]}
          secondary={currentAthlete.images[1]}
          quinary={currentAthlete.images[4]}
        >
          <Style.Credits>
            <img src={TimeBrazil} alt="Time Brasil" width={32} />
            <a href="https://www.instagram.com/timebrasil/">@Time Brasil</a>
          </Style.Credits>
          <Medals medals={currentAthlete.medals} />

          <Style.ContentWraper>
            <Border />

            <Style.Preview />

            <Style.Preview />
          </Style.ContentWraper>
        </Style.Aside>

        <Style.Aside
          tertiary={currentAthlete.images[2]}
          quartenary={currentAthlete.images[3]}
          sextary={currentAthlete.images[5]}
        >
          <Style.ContentWraper>
            <Border />

            <Style.Preview />
            <Style.Preview />
            <Style.Preview />

            <span>{/* Yellow noise */}</span>

            <div>
              <div>
                <div>
                  <Style.Title>{currentAthlete.title}</Style.Title>
                  {splitDescriptionIntoParagraphs(currentAthlete.description)}
                </div>

                <SocialMedia socialMediaLink={currentAthlete.socialMedia} />
              </div>

              <div>{/* Blue noise */}</div>
            </div>
          </Style.ContentWraper>

          <span>
            <img src={brasilData.flag_url} alt={brasilData.name} />
            <span>
              <span>{brasilData.total_medals}</span> <span>Medalhas</span>{" "}
            </span>
          </span>
        </Style.Aside>
      </Style.GlobalSection>

      {!isLastAthlete && <ArrowScroollDown />}
    </>
  );
};

export default Section;
