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
    const checkScrollTimelineSupport = () => {
      try {
        return CSS.supports?.("animation-timeline: scroll()") || false;
      } catch {
        return false;
      }
    };

    const supportsScrollTimeline = checkScrollTimelineSupport();
    console.log({ supportsScrollTimeline });
    setHasScrollTimeline(supportsScrollTimeline);

    if (!supportsScrollTimeline) {
      let ticking = false;
      const scrollThreshold = window.innerHeight * 0.7;

      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > scrollThreshold ? "down" : "up";
        document.body.setAttribute("data-scroll-position", direction);
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDirection);
          ticking = true;
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      updateScrollDirection(); // initialize on load

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
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
