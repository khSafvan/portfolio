import React, { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CursorContext } from "../../contexts/cursorState";
import { portfolioConfig } from "../../config/portfolio";
import InfiniteScrollBackground from "../../components/InfiniteScrollBackground";
import Header from "../../components/Header";
import GoalsTicker from "../../components/GoalsTicker";
import "./HeroSection.css";
import GameButton from "../../components/GameButton/GameButton";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { setButtonHovered } = useContext(CursorContext);
  const { hero } = portfolioConfig;
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500); // reset after animation
  };

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
      <InfiniteScrollBackground />
      <Header />

      {/* Developer Image */}
      <div
        className="image-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          draggable="false"
          src={hero.image}
          alt="Developer"
          className="image"
        />
      </div>

      {/* Hero Content */}
      <div className="content">
        <h1 className="title">
          {hero.greeting} {hero.name}
        </h1>
        <p className="description">{hero.description}</p>
        <GameButton color="#4da8da">Hire Me!</GameButton>
      </div>

      {/* Email Contact */}
      <a
        href={`mailto:${portfolioConfig.personal.email}`}
        className="email"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {portfolioConfig.personal.email}
      </a>

      <GoalsTicker />
    </section>
  );
}
