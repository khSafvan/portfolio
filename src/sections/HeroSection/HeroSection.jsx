import React, { useContext } from "react";
import { CursorContext } from "../../contexts/cursorState";
import { Button } from "../../components/ui";
import { portfolioConfig } from "../../config/portfolio";
import InfiniteScrollBackground from "../../components/InfiniteScrollBackground";
import Header from "../../components/Header";
import GoalsTicker from "../../components/GoalsTicker";
import "./HeroSection.css";

export default function HeroSection() {
  const { setButtonHovered } = useContext(CursorContext);
  const { hero } = portfolioConfig;

  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  return (
    <section className="hero-section">
      <InfiniteScrollBackground />
      <Header />

      {/* Developer Image */}
      <div
        className="hero-section__image-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          draggable="false"
          src={hero.image}
          alt="Developer"
          className="hero-section__image"
        />
      </div>

      {/* Hero Content */}
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          {hero.greeting} {hero.name}
        </h1>
        <p className="hero-section__description">{hero.description}</p>
        <Button
          variant="primary"
          size="large"
          className="hero-section__cta"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hero.ctaText}
        </Button>
      </div>

      {/* Email Contact */}
      <a
        href={`mailto:${portfolioConfig.personal.email}`}
        className="hero-section__email"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {portfolioConfig.personal.email}
      </a>

      <GoalsTicker />
    </section>
  );
}
