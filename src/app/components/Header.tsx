import { useState, useEffect, MouseEventHandler } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

interface HeaderProps {
  handleSmoothScroll: (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => void;
  handleScrollToTop: MouseEventHandler;
}

const Header: React.FC<HeaderProps> = ({
  handleSmoothScroll,
  handleScrollToTop,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuItems = document.querySelectorAll(".mobile-menu-item");
    const mobileButton = document.querySelector(".mobile-menu-button");
    const overlay = document.querySelector(".mobile-overlay");

    if (mobileMenu && menuItems.length > 0) {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";

        if (overlay) {
          gsap.fromTo(
            overlay,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power2.out" }
          );
        }

        gsap.fromTo(
          mobileMenu,
          { opacity: 0, height: 0, y: -20 },
          {
            opacity: 1,
            height: "auto",
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          }
        );

        gsap.fromTo(
          menuItems,
          { opacity: 0, x: -30, scale: 0.95 },
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

        if (mobileButton) {
          gsap.to(mobileButton, {
            rotation: 180,
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)",
          });

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
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          });
        }

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

    return () => {
      if (!isMobileMenuOpen) {
        document.body.style.overflow = "auto";
      }
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-cream/80 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50">
      {isMobileMenuOpen && (
        <div className="mobile-overlay md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      )}

      <div className="container mx-auto px-4 py-4 relative z-50">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer transition-transform hover:scale-105"
            onClick={handleScrollToTop}
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate">PulsePal</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "#features")}
              className="text-slate hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
              className="text-slate hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="text-slate hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Button className="hidden md:block bg-cta hover:bg-button-hover text-white rounded-full px-6">
            Get Started
          </Button>

          <button
            className="mobile-menu-button md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-slate transition-transform duration-300" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden mt-4 pb-4 border-t border-primary/10 overflow-hidden bg-cream/95 backdrop-blur-sm rounded-b-2xl shadow-lg">
            <nav className="flex flex-col space-y-2 pt-4 px-2">
              <Link
                href="#features"
                onClick={(e) => handleSmoothScroll(e, "#features")}
                className="mobile-menu-item text-slate hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 hover:translate-x-2"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
                className="mobile-menu-item text-slate hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 hover:translate-x-2"
              >
                How It Works
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="mobile-menu-item text-slate hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 hover:translate-x-2"
              >
                Contact
              </Link>
              <Button className="mobile-menu-item bg-cta hover:bg-button-hover text-white rounded-full px-6 mt-4 w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
