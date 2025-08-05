import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CursorContext } from "../../contexts/cursorState";
import { portfolioConfig } from "../../config/portfolio";
import { Card } from "../../components/ui";
import "./ExperienceSection.css";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { experience } = portfolioConfig;
  const { setButtonHovered } = useContext(CursorContext);

  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section title
    tl.fromTo(
      ".experience-section__title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Animate cards with stagger
    tl.fromTo(
      cards,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Hover animations for cards
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="experience-section">
      <div className="container">
        <h2 className="experience-section__title">{experience.title}</h2>

        <div className="experience-section__content">
          {experience.items.map((item, index) => (
            <Card
              key={index}
              ref={addToCardsRef}
              variant="elevated"
              className="experience-card"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="experience-card__header">
                <div className="experience-card__company">
                  <h3 className="experience-card__company-name">
                    {item.company}
                  </h3>
                  <span className="experience-card__position">
                    {item.position}
                  </span>
                </div>
                <div className="experience-card__duration">
                  <span className="experience-card__duration-text">
                    {item.duration}
                  </span>
                </div>
              </div>

              <div className="experience-card__body">
                <p className="experience-card__description">
                  {item.description}
                </p>

                {item.achievements && (
                  <div className="experience-card__achievements">
                    <h4 className="experience-card__achievements-title">
                      Key Achievements:
                    </h4>
                    <ul className="experience-card__achievements-list">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="experience-card__achievement">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="experience-card__footer">
                <div className="experience-card__technologies">
                  <h4 className="experience-card__technologies-title">
                    Technologies:
                  </h4>
                  <div className="experience-card__technologies-list">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx} className="experience-card__technology">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
