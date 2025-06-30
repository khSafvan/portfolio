import { useState } from "react";
import "./App.css";
import Header from "./rootComponents/Header";
import CustomSectionOneBackground from "./rootComponents/InfiniteScrollBackground";
import CustomCursor from "./rootComponents/CustomCursor";
import InfiniteScrollBackground from "./rootComponents/InfiniteScrollBackground";

function App() {
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  return (
    <>
      <CustomCursor
        isClicking={isClicking}
        setIsClicking={setIsClicking}
        buttonHovered={buttonHovered}
        setButtonHovered={setButtonHovered}
      />
      <div className="globelWrap">
        <div className="landingSection">
          <InfiniteScrollBackground />
          {/* <CustomSectionOneBackground
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          /> */}
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
        <div className="myStackSection">
          <div className="burgerImgWrapper">
            <img
              draggable="false"
              style={{}}
              src="/burgerOutline.png"
              alt="Burger"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
