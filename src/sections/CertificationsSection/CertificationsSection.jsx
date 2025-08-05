import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CursorContext } from "../../contexts/cursorState";
import { portfolioConfig } from "../../config/portfolio";
import { Card } from "../../components/ui";
import "./CertificationsSection.css";

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const { certifications } = portfolioConfig;
  const { setButtonHovered } = useContext(CursorContext);

  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
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
      ".certifications-section__title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Animate container
    tl.fromTo(
      container,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // Animate cards with stagger
    tl.fromTo(
      cards,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Horizontal scroll animation
    const horizontalScroll = gsap.to(container, {
      x: -(container.scrollWidth - window.innerWidth + 100),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Hover animations for cards
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.05,
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
    <section ref={sectionRef} className="certifications-section">
      <div className="container">
        <h2 className="certifications-section__title">
          {certifications.title}
        </h2>

        <div ref={containerRef} className="certifications-section__container">
          <div className="certifications-section__content">
            {certifications.items.map((cert, index) => (
              <Card
                key={index}
                ref={addToCardsRef}
                variant="elevated"
                className="certification-card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="certification-card__header">
                  <div className="certification-card__platform">
                    <span className="certification-card__platform-badge">
                      {cert.platform}
                    </span>
                    <span className="certification-card__duration">
                      {cert.duration}
                    </span>
                  </div>
                  <div className="certification-card__date">
                    <span className="certification-card__date-text">
                      {cert.date}
                    </span>
                  </div>
                </div>

                <div className="certification-card__body">
                  <h3 className="certification-card__title">{cert.title}</h3>
                  <p className="certification-card__instructor">
                    by {cert.instructor}
                  </p>
                  <p className="certification-card__description">
                    {cert.description}
                  </p>

                  <div className="certification-card__skills">
                    <h4 className="certification-card__skills-title">
                      Skills Learned:
                    </h4>
                    <div className="certification-card__skills-list">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="certification-card__skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="certification-card__footer">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-card__link"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    View Certificate →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
