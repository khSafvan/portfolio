import React from "react";
import InfiniteScrollBackground from "../../components/InfiniteScrollBackground";
import Header from "../../components/Header";
import "./style.css";

export default function HeroSection({
  isClicking = false,
  setIsClicking = () => {},
  buttonHovered = false,
  setButtonHovered = () => {},
}) {
  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  return (
    <div className="landingSection">
      <InfiniteScrollBackground />
      <Header />
      <div className="devImgWrapper">
        <img
          draggable="false"
          style={{}}
          src="/dev8bitArt.png"
          alt="Developer"
        />
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="emailWrap"
      >
        khalifasafvan@yahoo.com
      </div>
      <div className="rightStatsWrapper">
        <div className="rightStats">ASK1</div>
        <div className="rightStats">ASK1</div>
        <div className="rightStats">ASK1</div>
      </div>
    </div>
  );
}
