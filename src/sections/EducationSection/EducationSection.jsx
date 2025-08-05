import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CursorContext } from "../../contexts/cursorState";
import { portfolioConfig } from "../../config/portfolio";
import { Card } from "../../components/ui";
import "./EducationSection.css";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const { education } = portfolioConfig;
  const { setButtonHovered } = useContext(CursorContext);

  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;

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
      ".education-section__title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Animate education card
    tl.fromTo(
      card,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Animate list items with stagger
    tl.fromTo(
      ".education-card__course",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.2"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="education-section">
      <div className="container">
        <h2 className="education-section__title">{education.title}</h2>

        <div className="education-section__content">
          {education.items.map((item, index) => (
            <Card
              key={index}
              ref={cardRef}
              variant="elevated"
              className="education-card"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="education-card__header">
                <div className="education-card__degree">
                  <h3 className="education-card__degree-name">{item.degree}</h3>
                  <span className="education-card__institution">
                    {item.institution}
                  </span>
                </div>
                <div className="education-card__duration">
                  <span className="education-card__duration-text">
                    {item.duration}
                  </span>
                  <span className="education-card__gpa">GPA: {item.gpa}</span>
                </div>
              </div>

              <div className="education-card__body">
                <p className="education-card__description">
                  {item.description}
                </p>

                <div className="education-card__courses">
                  <h4 className="education-card__courses-title">
                    Relevant Courses:
                  </h4>
                  <div className="education-card__courses-list">
                    {item.relevantCourses.map((course, idx) => (
                      <span key={idx} className="education-card__course">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {item.achievements && (
                  <div className="education-card__achievements">
                    <h4 className="education-card__achievements-title">
                      Achievements:
                    </h4>
                    <ul className="education-card__achievements-list">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="education-card__achievement">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
