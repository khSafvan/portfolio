import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioConfig } from "../../config/portfolio";
import "./style.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const { projects } = portfolioConfig;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  // GSAP Sticky Scroll Effect
  useEffect(() => {
    if (!projects) return;

    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (!section || !title || !cards.length) return;

    // Sticky scroll effect
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      pin: true,
      pinSpacing: true,
      onEnter: () => {
        // Animate title with slide effect
        gsap.fromTo(
          title,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Animate project cards with stagger and 3D effect
        gsap.fromTo(
          cards,
          {
            y: 150,
            opacity: 0,
            scale: 0.7,
            rotationY: 45,
            transformOrigin: "center center",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
          }
        );
      },
      onLeave: () => {
        // Subtle parallax effect on leave
        gsap.to(cards, {
          y: -30,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
      onEnterBack: () => {
        // Reset cards position when scrolling back up
        gsap.to(cards, {
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [projects]);

  if (!projects) return null;

  return (
    <section ref={sectionRef} className="projects">
      <div className="inner">
        <h2 ref={titleRef} className="title">
          {projects.title}
        </h2>
        <div className="grid">
          {projects.items.map((p, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="card"
            >
              <div className="thumb">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="content">
                <div className="card-title">{p.title}</div>
                <div className="desc">{p.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
