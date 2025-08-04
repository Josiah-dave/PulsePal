"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Calendar,
  Users,
  CreditCard,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Zap,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureHighlights from "./components/FeatureHighlights";
import HowItWorks from "./components/HowItWorks";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
import FooterForm from "./components/FooterForm";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function PulsePalLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const checklistRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial page load animations
    tl.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        badgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        checklistRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );

    // Scroll-triggered animations for features
    gsap.fromTo(
      ".feature-card",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    // How It Works section animation
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
          trigger: howItWorksRef.current,
          start: "top 70%",
          end: "bottom 30%",
        },
      }
    );

    // Stats section animation
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
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    // CTA section animation
    gsap.fromTo(
      ".cta-content",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 70%",
          end: "bottom 30%",
        },
      }
    );

    // Footer animation
    gsap.fromTo(
      ".footer-content",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "bottom 15%",
        },
      }
    );

    // Parallax effect for sections
    gsap.to(".parallax-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-bg",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Text reveal animation for section headings
    gsap.fromTo(
      ".section-heading",
      {
        y: 100,
        opacity: 0,
        clipPath: "inset(100% 0 0 0)",
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0 0 0)",
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Mobile menu animation and body scroll lock
  useEffect(() => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuItems = document.querySelectorAll(".mobile-menu-item");
    const mobileButton = document.querySelector(".mobile-menu-button");
    const overlay = document.querySelector(".mobile-overlay");

    if (mobileMenu && menuItems.length > 0) {
      if (isMobileMenuOpen) {
        // Lock body scroll
        document.body.style.overflow = "hidden";

        // Animate the overlay
        if (overlay) {
          gsap.fromTo(
            overlay,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power2.out" }
          );
        }

        // Animate the menu container
        gsap.fromTo(
          mobileMenu,
          {
            opacity: 0,
            height: 0,
            y: -20,
          },
          {
            opacity: 1,
            height: "auto",
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          }
        );

        // Stagger animate the menu items
        gsap.fromTo(
          menuItems,
          {
            opacity: 0,
            x: -30,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
            stagger: 0.1,
            delay: 0.1,
          }
        );

        // Animate the hamburger button rotation with pulse effect
        if (mobileButton) {
          gsap.to(mobileButton, {
            rotation: 180,
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)",
          });

          // Add a subtle pulse
          gsap.to(mobileButton, {
            scale: 1.05,
            duration: 1,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: 0.5,
          });
        }
      } else {
        // Animate out the overlay
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          });
        }

        // Animate out
        gsap.to(menuItems, {
          opacity: 0,
          x: -20,
          scale: 0.95,
          duration: 0.2,
          ease: "power2.in",
          stagger: 0.05,
        });

        gsap.to(mobileMenu, {
          opacity: 0,
          height: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
          delay: 0.1,
        });

        // Reset hamburger button rotation and kill any ongoing animations
        if (mobileButton) {
          gsap.killTweensOf(mobileButton);
          gsap.to(mobileButton, {
            rotation: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    }

    // Cleanup function to restore scroll when component unmounts or menu closes
    return () => {
      if (!isMobileMenuOpen) {
        document.body.style.overflow = "auto";
      }
    };
  }, [isMobileMenuOpen]);

  // Handle body scroll lock cleanup
  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu when link is clicked
    const target = document.querySelector(targetId);
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, offsetY: 80 },
        ease: "power2.out",
      });
    }
  };

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu when scrolling to top
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power2.out",
    });
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  return (
    <div className="min-h-screen bg-cream">
      <Header
        handleSmoothScroll={handleSmoothScroll}
        handleScrollToTop={handleScrollToTop}
      />

      <HeroSection
        ref={heroRef}
        badgeRef={badgeRef}
        titleRef={titleRef}
        subtitleRef={subtitleRef}
        buttonsRef={buttonsRef}
        checklistRef={checklistRef}
      />

      <FeatureHighlights ref={featuresRef} />

      <HowItWorks ref={howItWorksRef} />

      <StatsSection ref={statsRef} />

      <CTASection ref={ctaRef} />

      {/* Footer */}
      <footer
        ref={footerRef}
        id="contact"
        className="bg-slate text-white py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="footer-content space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold">PulsePal</span>
                </div>
                <p className="text-white/70 text-lg max-w-md">
                  The smart, simple system for leisure centres. Built for real
                  people, powered by AI.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@pulsepal.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-aqua" />
                  <span>+44 20 7946 0958</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cta" />
                  <span>London, UK</span>
                </div>
              </div>
            </div>

            <div className="footer-content space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-white/70">
                  Ready to see PulsePal in action? Let's schedule a demo and
                  show you how we can transform your leisure centre.
                </p>
              </div>

              <FooterForm />
            </div>
          </div>

          <div className="footer-content border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>
              &copy; 2024 PulsePal. All rights reserved. Made with care for
              leisure centres everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
