import "./IntroScreen.css";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const IntroScreen = ({ children }) => {
  const overlay = useRef(null);
  const scanline = useRef(null);
  const logoRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => setShowIntro(false) });

    // CRT flicker scanlines
    tl.to(scanline.current, {
      opacity: 0.2,
      repeat: 5,
      yoyo: true,
      duration: 0.7,
    });

    // Typing animation for each letter
    const letters = Array.from(logoRef.current.querySelectorAll(".letter"));
    letters.forEach((letter, i) => {
      tl.to(letter, { opacity: 1, duration: 0.2 }, "-=0.05");
    });

    // Glitch shake
    tl.to(logoRef.current, {
      x: "+=2",
      yoyo: true,
      repeat: 5,
      duration: 0.07,
      ease: "power2.inOut",
    }).to(logoRef.current, { x: 0, duration: 0.03 });

    // Fade out overlay
    tl.to(overlay.current, { opacity: 0, duration: 0.8 });
  }, []);

  return (
    <div className="app-container">
      {/* Main content */}
      <div className="main-content">{children}</div>

      {/* CRT Intro Overlay */}
      {showIntro && (
        <div ref={overlay} className="intro-overlay">
          {/* Scanline effect */}
          <div ref={scanline} className="scanline"></div>

          {/* Logo / Name */}
          <div ref={logoRef} className="logo">
            {"Safvan".split("").map((char, i) => (
              <span key={i} className="letter">
                {char}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroScreen;
