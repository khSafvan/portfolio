import { useState, lazy, Suspense, useMemo } from "react";
import "./App.css";

// Use lazy loading for components
const CustomCursor = lazy(() => import("./rootComponents/CustomCursor"));
const CustomSectionOneBackground = lazy(() =>
  import("./rootComponents/CustomSectionOneBackground")
);
const Header = lazy(() => import("./rootComponents/Header"));

// Simple fallback component
const LoadingFallback = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Loading...
  </div>
);

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
      <Suspense fallback={<LoadingFallback />}>
        <CustomCursor
          isClicking={isClicking}
          setIsClicking={setIsClicking}
          buttonHovered={buttonHovered}
          setButtonHovered={setButtonHovered}
        />
      </Suspense>
      <div className="globelWrap">
        <Suspense fallback={<LoadingFallback />}>
          <CustomSectionOneBackground
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Header />
        </Suspense>
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
