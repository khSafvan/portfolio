import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CursorContext } from "../../contexts/cursorState";
import { portfolioConfig } from "../../config/portfolio";
import { Card, Button } from "../../components/ui";
import "./ProjectsSection.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const { projects } = portfolioConfig;
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
      ".projects-section__title",
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
    <section ref={sectionRef} className="projects-section">
      <div className="container">
        <h2 className="projects-section__title">{projects.title}</h2>

        <div ref={containerRef} className="projects-section__container">
          <div className="projects-section__content">
            {projects.items.map((project, index) => (
              <Card
                key={index}
                ref={addToCardsRef}
                variant="elevated"
                className="project-card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="project-card__image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image-img"
                  />
                  <div className="project-card__image-overlay">
                    <div className="project-card__image-overlay-content">
                      <Button
                        variant="primary"
                        size="small"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="small"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <div className="project-card__features">
                    <h4 className="project-card__features-title">
                      Key Features:
                    </h4>
                    <ul className="project-card__features-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="project-card__feature">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-card__footer">
                  <div className="project-card__technologies">
                    <h4 className="project-card__technologies-title">
                      Technologies:
                    </h4>
                    <div className="project-card__technologies-list">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="project-card__technology">
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
      </div>
    </section>
  );
};

export default ProjectsSection;
