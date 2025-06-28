import { useState } from "react";
import "./App.css";
import Header from "./rootComponents/Header";
import CustomSectionOneBackground from "./rootComponents/CustomSectionOneBackground";
import CustomCursor from "./rootComponents/CustomCursor";

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
          <Header />
          <CustomSectionOneBackground
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div className="devImgWrapper">
            <img
              draggable="false"
              style={{}}
              src="/dev8bitArt.png"
              alt="Developer"
            />
          </div>
        </div>
        <div className="myStackSection"></div>
      </div>
    </>
  );
}

export default App;
