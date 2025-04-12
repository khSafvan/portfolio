import { useState, lazy, Suspense, useMemo } from "react";
import "./App.css";
import Header from "./rootComponents/Header";
import CustomSectionOneBackground from "./rootComponents/CustomSectionOneBackground";

// Only lazy load larger components that aren't needed on initial render
const CustomCursor = lazy(() => import("./rootComponents/CustomCursor"));

function App() {
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  // Memoize the static content sections
  const staticSections = useMemo(() => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((a, i) => (
      <div
        key={i}
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          background: i % 2 === 0 ? "#282828" : "#f8c70c",
        }}
      >
        Section {i + 1}
      </div>
    ));
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <CustomCursor
          isClicking={isClicking}
          setIsClicking={setIsClicking}
          buttonHovered={buttonHovered}
          setButtonHovered={setButtonHovered}
        />
      </Suspense>
      <div className="globelWrap">
        <CustomSectionOneBackground
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Header />
        <div className="landingSection"></div>
        <div className="infoSectionWrap container">
          {/* placeholder */}
          <div style={{ padding: "20px" }}>
            <h1>Lenis Scroll Test</h1>

            {/* Create multiple sections to enable scrolling */}
            {staticSections}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
