import React, { forwardRef, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = forwardRef<HTMLDivElement>((_, ref) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        ".how-it-works-step",
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
          },
        }
      );
      gsap.to(".how-it-works-step .w-16", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });

      gsap.to(".bg-cta\\/10, .bg-primary\\/10", {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-50, 50),
        duration: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  const steps = [
    {
      number: "1",
      bgColor: "bg-primary",
      title: "Quick Setup",
      description:
        "Import your existing member data and configure your facilities in under 30 minutes.",
    },
    {
      number: "2",
      bgColor: "bg-aqua",
      title: "Smart Learning",
      description:
        "PulsePal learns your patterns and preferences, getting smarter with every booking.",
    },
    {
      number: "3",
      bgColor: "bg-cta",
      title: "Happy Members",
      description:
        "Watch satisfaction soar as families enjoy seamless bookings and personalized experiences.",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-16 lg:py-20 bg-cream relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-cta/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="how-it-works-step text-center space-y-4 mb-16">
          <h2 className="section-heading text-3xl lg:text-5xl font-bold text-slate">
            Simple Setup, Powerful Results
          </h2>
          <p className="text-xl text-slate/70 max-w-2xl mx-auto">
            Get up and running in minutes, not months. PulsePal grows with your
            centre.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="how-it-works-step text-center space-y-4"
            >
              <div
                className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto text-white text-2xl font-bold`}
              >
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-slate">{step.title}</h3>
              <p className="text-slate/70 text-lg">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="how-it-works-step text-center mt-12">
          <Button
            size="lg"
            className="bg-cta hover:bg-cta/90 text-white rounded-full px-8 py-4 text-lg shadow-lg font-semibold"
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
});

HowItWorks.displayName = "HowItWorks";

export default HowItWorks;
