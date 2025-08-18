import React, { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CursorContext } from "../../contexts/cursorState";
import { Button } from "../../components/ui";
import { portfolioConfig } from "../../config/portfolio";
import Header from "../../components/Header";
import "./HeroSection.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { setButtonHovered } = useContext(CursorContext);
  const { hero } = portfolioConfig;
  const sectionRef = useRef(null);

  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  // GSAP Sticky Scroll Effect
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Create sticky scroll effect
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        gsap.to(section, {
          scale: 1.02,
          duration: 0.8,
          ease: "power2.out",
        });
      },
      onLeave: () => {
        gsap.to(section, {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero-card">
        <Header />

        {/* Center Portrait with teal brush */}
        <div className="portrait" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="brush" aria-hidden></div>
          <img draggable="false" src={hero.image} alt="Developer" className="portrait-image" />
        </div>

        {/* Left content */}
        <div className="hero-left">
          <h1 className="hero-title">
            {hero.greeting},<br />I’m {hero.name}
          </h1>
          <a
            href={`mailto:${portfolioConfig.personal.email}`}
            className="email-pill"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {portfolioConfig.personal.email}
          </a>
          <div className="experience">
            <div className="years">10</div>
            <div className="label">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="hero-right">
          <p className="side-note">
            I design beautifully simple things. And I love what I do.
          </p>
          <div className="badge">
            <div className="badge-inner">
              <div className="badge-dot" />
            </div>
            <div className="badge-text">
              IDF CERTIFIED
              <br />
              PROFESSIONAL
              <br />
              UI/UX DESIGNER
            </div>
          </div>
          <Button
            variant="primary"
            size="large"
            className="cta"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {hero.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
