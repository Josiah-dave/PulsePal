import React, { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StatsSection = forwardRef<HTMLDivElement>((_, ref) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        ".stat-item",
        { y: 60, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
      gsap.to(".stat-item p:first-child", {
        scale: 1.05,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.8,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-[-5%] w-56 h-56 bg-aqua/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-[-5%] w-72 h-72 bg-cta/10 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="stat-item space-y-2">
              <p className="text-4xl lg:text-5xl font-bold text-primary">15+</p>
              <p className="text-slate/70 text-lg">Hours saved weekly</p>
            </div>
            <div className="stat-item space-y-2">
              <p className="text-4xl lg:text-5xl font-bold text-aqua">98%</p>
              <p className="text-slate/70 text-lg">Member satisfaction</p>
            </div>
            <div className="stat-item space-y-2">
              <p className="text-4xl lg:text-5xl font-bold text-cta">35%</p>
              <p className="text-slate/70 text-lg">Increase in bookings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = "StatsSection";

export default StatsSection;
