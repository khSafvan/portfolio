import { useContext } from "react";
import InfiniteScrollBackground from "../../components/InfiniteScrollBackground";
import Header from "../../components/Header";
import GoalsTicker from "../../components/GoalsTicker";
import "./style.css";
import { CursorContext } from "../../contexts/cursorState";

export default function HeroSection() {
  const { setButtonHovered } = useContext(CursorContext);
  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  return (
    <div className="landingSection">
      <InfiniteScrollBackground />
      <Header />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="devImgWrapper"
      >
        <img
          draggable="false"
          style={{}}
          src="/dev8bitArt.png"
          alt="Developer"
        />
      </div>
      <div className="heroIntroText">
        <div className="heroName">Hi, I am Safvan</div>
        <div className="heroIntro">
          a Web Developer with 3+ years of experience helping businesses build
          fast, modern, and user-focused digital solutions. I combine intutive
          design, efficient code, and strategic thinking to turn ideas into
          powerful web experiences.
        </div>
        <div className="heroHireBtn">Hire Me</div>
      </div>
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
