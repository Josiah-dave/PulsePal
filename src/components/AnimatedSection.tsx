"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideLeft"
    | "slideRight"
    | "scaleIn"
    | "stagger";
  delay?: number;
  duration?: number;
  className?: string;
  trigger?: "onLoad" | "onScroll";
  staggerDelay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.8,
  className = "",
  trigger = "onScroll",
  staggerDelay = 0.1,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;

    const animationConfig = {
      fadeIn: { from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 } },
      slideUp: { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
      slideLeft: { from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 } },
      slideRight: { from: { opacity: 0, x: 50 }, to: { opacity: 1, x: 0 } },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      stagger: { from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 } },
    };

    const config = animationConfig[animation];

    if (trigger === "onLoad") {
      gsap.fromTo(element, config.from, {
        ...config.to,
        duration,
        delay,
        ease: animation === "scaleIn" ? "back.out(1.7)" : "power2.out",
      });
    } else {
      gsap.fromTo(element, config.from, {
        ...config.to,
        duration,
        delay,
        ease: animation === "scaleIn" ? "back.out(1.7)" : "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // If stagger animation, handle children separately
    if (animation === "stagger") {
      const children = element.children;
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: duration * 0.8,
          ease: "power2.out",
          stagger: staggerDelay,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [animation, delay, duration, trigger, staggerDelay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
