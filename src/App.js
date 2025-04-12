import { useState, useMemo, useEffect } from "react";
import "./App.css";
import Header from "./rootComponents/Header";
import CustomSectionOneBackground from "./rootComponents/CustomSectionOneBackground";
import CustomCursor from "./rootComponents/CustomCursor";

function App() {
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [hasScrollTimeline, setHasScrollTimeline] = useState(false);

  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  useEffect(() => {
    try {
      const supportsScrollTimeline = CSS.supports(
        "animation-timeline: scroll()"
      );
      setHasScrollTimeline(supportsScrollTimeline);

      if (!supportsScrollTimeline) {
        let ticking = false;
        const scrollThreshold = 70;

        const handleScroll = () => {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          const scrollThresholdPixels =
            (scrollThreshold / 100) * viewportHeight;

          if (scrollY > scrollThresholdPixels) {
            document.body.setAttribute("data-scroll-position", "down");
          } else {
            document.body.setAttribute("data-scroll-position", "up");
          }

          ticking = false;
        };

        const scrollListener = () => {
          if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
          }
        };

        window.addEventListener("scroll", scrollListener, { passive: true });

        handleScroll();

        return () => {
          window.removeEventListener("scroll", scrollListener);
        };
      }
    } catch (e) {
      console.log("Scroll animation feature detection failed:", e);
    }
  }, []);

  useEffect(() => {
    if (hasScrollTimeline) {
      document.documentElement.classList.add("scroll-driven-available");
    }
  }, [hasScrollTimeline]);

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
      <CustomCursor
        isClicking={isClicking}
        setIsClicking={setIsClicking}
        buttonHovered={buttonHovered}
        setButtonHovered={setButtonHovered}
      />
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
            {staticSections}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
