import { useState } from "react";
import "./App.css";
import CustomCursor from "./rootComponents/CustomCursor";
import CustomSectionOneBackground from "./rootComponents/CustomSectionOneBackground";
import Header from "./rootComponents/Header";

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
      <div class="sectionOne">
        <Header />
        <CustomSectionOneBackground
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
}

export default App;
