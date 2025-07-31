import React, { useContext, useState } from "react";
import InfiniteScrollBackground from "../../components/InfiniteScrollBackground";
import Header from "../../components/Header";
import GoalsTicker from "../../components/GoalsTicker";
import "./style.css";
import SystemWindow from "../../components/SystemWindow";
import { CursorContext } from "../../contexts/cursorState";

export default function HeroSection() {
  const { setButtonHovered } = useContext(CursorContext);
  const [showStats, setShowStats] = useState(false);
  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);
  console.log(showStats);

  return (
    <div className="landingSection">
      <InfiniteScrollBackground />
      <Header />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setShowStats(!showStats)}
        className="devImgWrapper"
      >
        <img
          draggable="false"
          style={{}}
          src="/dev8bitArt.png"
          alt="Developer"
        />
      </div>
      <SystemWindow isOpen={showStats} setIsOpen={setShowStats} />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="emailWrap"
      >
        khalifasafvan@yahoo.com
      </div>
      <GoalsTicker />
    </div>
  );
}
