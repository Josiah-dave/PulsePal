"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme, themes, type ThemeVariant } from "@/hooks/use-theme";
import { Palette, Check, X } from "lucide-react";
import { gsap } from "gsap";

export function ThemeSelector() {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleThemePanel = () => {
    setIsOpen(!isOpen);

    // Animate the panel
    const panel = document.querySelector(".theme-panel");
    if (panel) {
      if (!isOpen) {
        gsap.fromTo(
          panel,
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(panel, {
          x: "100%",
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  };

  const handleThemeChange = (theme: ThemeVariant) => {
    setTheme(theme);

    // Add a subtle flash effect
    const flashElement = document.createElement("div");
    flashElement.className =
      "fixed inset-0 bg-white pointer-events-none z-[9999]";
    flashElement.style.opacity = "0";
    document.body.appendChild(flashElement);

    gsap.to(flashElement, {
      opacity: 0.3,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(flashElement, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            document.body.removeChild(flashElement);
          },
        });
      },
    });
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <Button
        onClick={toggleThemePanel}
        className="fixed top-4 right-4 z-50 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
        size="sm"
      >
        <Palette className="w-5 h-5" />
      </Button>

      {/* Theme Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={toggleThemePanel}
          />

          {/* Panel */}
          <div className="theme-panel fixed top-0 right-0 h-full w-96 bg-white/95 backdrop-blur-md shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Choose Theme
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Customize your experience
                  </p>
                </div>
                <Button
                  onClick={toggleThemePanel}
                  variant="ghost"
                  size="sm"
                  className="rounded-full p-2 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Current Theme Info */}
              <div className="mb-6 p-4 rounded-lg bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: themes[currentTheme].colors.primary,
                    }}
                  />
                  <span className="font-medium text-gray-800">
                    {themes[currentTheme].name}
                  </span>
                  <Badge variant="secondary" className="ml-auto">
                    Current
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  {themes[currentTheme].description}
                </p>
              </div>

              {/* Theme Options */}
              <div className="space-y-3">
                {Object.entries(themes).map(([key, theme]) => (
                  <Card
                    key={key}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                      currentTheme === key
                        ? "ring-2 ring-blue-500 shadow-lg"
                        : ""
                    }`}
                    onClick={() => handleThemeChange(key as ThemeVariant)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {/* Color Palette Preview */}
                          <div className="flex gap-1">
                            <div
                              className="w-3 h-6 rounded-l"
                              style={{ backgroundColor: theme.colors.primary }}
                            />
                            <div
                              className="w-3 h-6"
                              style={{
                                backgroundColor: theme.colors.secondary,
                              }}
                            />
                            <div
                              className="w-3 h-6 rounded-r"
                              style={{ backgroundColor: theme.colors.accent }}
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">
                              {theme.name}
                            </h3>
                            <p className="text-xs text-gray-600">
                              {theme.description}
                            </p>
                          </div>
                        </div>
                        {currentTheme === key && (
                          <Check className="w-5 h-5 text-blue-500" />
                        )}
                      </div>

                      {/* Gradient Preview */}
                      <div
                        className="h-8 rounded-md"
                        style={{ background: theme.gradients.primary }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Theme preferences are saved automatically
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ThemeSelector;
