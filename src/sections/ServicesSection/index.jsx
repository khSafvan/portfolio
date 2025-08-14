import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioConfig } from "../../config/portfolio";
import "./style.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const { services } = portfolioConfig;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  // GSAP Sticky Scroll Effect
  useEffect(() => {
    if (!services) return;

    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;
    const stats = statsRef.current;

    if (!section || !title || !cards.length || !stats.length) return;

    // Sticky scroll effect
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      pin: true,
      pinSpacing: true,
      onEnter: () => {
        // Animate title
        gsap.fromTo(
          title,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        // Animate service cards with stagger
        gsap.fromTo(
          cards,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          }
        );

        // Animate stats with stagger
        gsap.fromTo(
          stats,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      },
      onLeave: () => {
        // Subtle scale effect on leave
        gsap.to(section, {
          scale: 0.98,
          duration: 0.4,
          ease: "power2.out",
        });
      },
      onEnterBack: () => {
        gsap.to(section, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [services]);

  if (!services) return null;

  return (
    <section ref={sectionRef} className="services">
      <div className="inner">
        <h2 ref={titleRef} className="title">
          {services.title}
        </h2>
        <p className="description">{services.description}</p>

        <div className="items">
          {services.items.map((item, index) => (
            <div key={index} className="service-card">
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="icon"
                aria-hidden
              >
                {item.icon}
              </div>
              <div className="content">
                <div className="service-title">{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="right">
          {services.stats.map((stat, index) => (
            <div key={index} className="stat">
              <div
                ref={(el) => (statsRef.current[index] = el)}
                className="stat-value"
              >
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
