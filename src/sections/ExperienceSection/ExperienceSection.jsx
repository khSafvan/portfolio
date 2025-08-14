import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioConfig } from "../../config/portfolio";
import "./style.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const { experience } = portfolioConfig;
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP horizontal scroll animation
  useEffect(() => {
    if (!experience || isMobile) return;

    const section = sectionRef.current;
    const container = containerRef.current;
    const cards = cardsRef.current;

    if (!section || !container || !cards.length) return;

    // Calculate total width for horizontal scroll
    const totalWidth = cards.reduce((acc, card) => {
      return acc + card.offsetWidth + 32; // 32px for gap
    }, 0);

    // Set container width to accommodate all cards
    gsap.set(container, {
      width: totalWidth,
      display: "flex",
      gap: "32px",
    });

    // Create horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Ensure smooth scrolling without jank
          if (self.progress === 0 || self.progress === 1) {
            self.scroll(1);
          }
        },
      },
    });

    // Animate container to the left (negative transform creates right-to-left scroll)
    tl.to(container, {
      x: -(totalWidth - window.innerWidth),
      ease: "none",
    });

    // Add stagger animation for cards appearing
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [experience, isMobile]);

  if (!experience) return null;

  return (
    <section ref={sectionRef} className="experience">
      <div className="experience-container">
        <h2 className="title">{experience.title}</h2>

        {/* Horizontal scroll container for desktop */}
        <div
          ref={containerRef}
          className={`cards-container ${isMobile ? "mobile" : "desktop"}`}
        >
          {experience.items.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="card"
            >
              <div className="card-header">
                <div className="role">{item.role}</div>
                <div className="period">{item.period}</div>
              </div>
              <div className="company">{item.company}</div>
              <p className="summary">{item.summary}</p>

              {/* Decorative elements */}
              <div className="card-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator for desktop */}
        {!isMobile && (
          <div className="scroll-indicator">
            <div className="scroll-text">Scroll to explore experience</div>
            <div className="scroll-arrow">→</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
