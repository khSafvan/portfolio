import { useState } from "react";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import HeroSection from "./sections/HeroSection";
import StackSection from "./sections/StackSection";

function App() {
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <>
      <CustomCursor
        isClicking={isClicking}
        setIsClicking={setIsClicking}
        buttonHovered={buttonHovered}
        setButtonHovered={setButtonHovered}
      />
      <div className="globelWrap">
        <HeroSection
          isClicking={isClicking}
          setIsClicking={setIsClicking}
          buttonHovered={buttonHovered}
          setButtonHovered={setButtonHovered}
        />
        <StackSection
          isClicking={isClicking}
          setIsClicking={setIsClicking}
          buttonHovered={buttonHovered}
          setButtonHovered={setButtonHovered}
        />
      </div>
    </>
  );
}

export default App;
