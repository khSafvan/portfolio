import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioConfig } from "../../config/portfolio";
import "./style.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const { testimonials } = portfolioConfig;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  // GSAP Sticky Scroll Effect
  useEffect(() => {
    if (!testimonials) return;

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
        // Animate title with fade and slide effect
        gsap.fromTo(
          title,
          { y: 80, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
        );

        // Animate testimonial cards with stagger and bounce effect
        gsap.fromTo(
          cards,
          {
            y: 120,
            opacity: 0,
            scale: 0.6,
            rotationX: 15,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.9,
            stagger: 0.25,
            ease: "back.out(1.7)",
          }
        );
      },
      onLeave: () => {
        // Subtle scale effect on leave
        gsap.to(section, {
          scale: 0.95,
          duration: 0.5,
          ease: "power2.out",
        });
      },
      onEnterBack: () => {
        // Reset scale when scrolling back up
        gsap.to(section, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [testimonials]);

  if (!testimonials) return null;

  return (
    <section ref={sectionRef} className="testimonials">
      <div className="inner">
        <h2 ref={titleRef} className="title">
          {testimonials.title}
        </h2>
        <div className="grid">
          {testimonials.items.map((t, idx) => (
            <blockquote
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="testimonial"
            >
              <p className="quote">"{t.quote}"</p>
              <footer className="footer">
                <span className="author">{t.author}</span>
                <span className="role">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
