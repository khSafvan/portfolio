import React from "react";
import { Button } from "../../components/ui";
import { portfolioConfig } from "../../config/portfolio";
import Header from "../../components/Header";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const { hero } = portfolioConfig;

  return (
    <section className={styles.hero}>
      <div className={styles.heroCard}>
        <Header />

        <div className={styles.portrait}>
          <img draggable="false" src={hero.image} alt="Developer" className={styles.portraitImage} />
        </div>

        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            {hero.greeting},<br />I’m {hero.name}
          </h1>
          <a href={`mailto:${portfolioConfig.personal.email}`} className={styles.emailPill}>
            {portfolioConfig.personal.email}
          </a>
          <div className={styles.experience}>
            <div className={styles.years}>10</div>
            <div className={styles.label}>
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <p className={styles.sideNote}>
            I design beautifully simple things. And I love what I do.
          </p>
          <div className={styles.badge}>
            <div className={styles.badgeInner}>
              <div className={styles.badgeDot} />
            </div>
            <div className={styles.badgeText}>
              IDF CERTIFIED
              <br />
              PROFESSIONAL
              <br />
              UI/UX DESIGNER
            </div>
          </div>
          <Button variant="primary" size="large" className={styles.cta}>
            {hero.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
