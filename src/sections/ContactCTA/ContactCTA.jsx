import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioConfig } from "../../config/portfolio";
import { Button } from "../../components/ui";
import "./style.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactCTA = () => {
  const { contactCta } = portfolioConfig;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  // GSAP Sticky Scroll Effect
  useEffect(() => {
    if (!contactCta) return;

    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (!section || !title || !subtitle || !button) return;

    // Sticky scroll effect
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        // Create a timeline for sequential animations
        const tl = gsap.timeline({ ease: "power2.out" });

        // Animate title with dramatic entrance
        tl.fromTo(
          title,
          { y: 100, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
        );

        // Animate subtitle with delay
        tl.fromTo(
          subtitle,
          { y: 60, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );

        // Animate button with bounce effect
        tl.fromTo(
          button,
          { y: 80, opacity: 0, scale: 0.7, rotation: -5 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.9,
            ease: "back.out(1.4)",
          },
          "-=0.2"
        );

        // Add floating animation to the entire section
        gsap.to(section, {
          y: -20,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      },
      onLeave: () => {
        // Stop floating animation and add subtle effect
        gsap.killTweensOf(section);
        gsap.to(section, {
          y: 0,
          scale: 0.98,
          duration: 0.6,
          ease: "power2.out",
        });
      },
      onEnterBack: () => {
        // Restart floating animation when scrolling back up
        gsap.to(section, {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });

        gsap.to(section, {
          y: -20,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(section);
    };
  }, [contactCta]);

  if (!contactCta) return null;

  return (
    <section ref={sectionRef} className="contact-cta">
      <div className="inner">
        <h2 ref={titleRef} className="title">
          {contactCta.title}
        </h2>
        <p ref={subtitleRef} className="subtitle">
          {contactCta.subtitle}
        </p>
        <Button
          ref={buttonRef}
          as="a"
          href={`mailto:${contactCta.email}`}
          variant="primary"
          size="large"
          className="button"
        >
          Say Hi
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
