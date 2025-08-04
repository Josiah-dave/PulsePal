"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Define theme types
export type ThemeVariant =
  | "default"
  | "ocean"
  | "sunset"
  | "forest"
  | "midnight"
  | "coral";

// Define theme configurations
export const themes = {
  default: {
    name: "PulsePal Classic",
    description: "The original vibrant and modern theme",
    colors: {
      primary: "#66CCFF",
      secondary: "#4ECDC4",
      accent: "#1A73E8",
      background: "#FFF8F2",
      surface: "#FFFFFF",
      text: "#2E2E3A",
      textSecondary: "#6B7280",
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
      overlay: "rgba(0, 0, 0, 0.1)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #66CCFF 0%, #4ECDC4 100%)",
      hero: "linear-gradient(135deg, #FFF8F2 0%, #F3F4F6 100%)",
      card: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
    },
  },
  ocean: {
    name: "Ocean Blue",
    description: "Cool and professional oceanic vibes",
    colors: {
      primary: "#0EA5E9",
      secondary: "#06B6D4",
      accent: "#3B82F6",
      background: "#F0F9FF",
      surface: "#FFFFFF",
      text: "#0F172A",
      textSecondary: "#475569",
      success: "#059669",
      warning: "#D97706",
      error: "#DC2626",
      overlay: "rgba(15, 23, 42, 0.1)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
      hero: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)",
      card: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
    },
  },
  sunset: {
    name: "Sunset Glow",
    description: "Warm and energetic sunset colors",
    colors: {
      primary: "#F97316",
      secondary: "#EC4899",
      accent: "#EF4444",
      background: "#FFF7ED",
      surface: "#FFFFFF",
      text: "#1F2937",
      textSecondary: "#6B7280",
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
      overlay: "rgba(31, 41, 55, 0.1)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #F97316 0%, #EC4899 100%)",
      hero: "linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)",
      card: "linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 100%)",
    },
  },
  forest: {
    name: "Forest Green",
    description: "Natural and calming forest theme",
    colors: {
      primary: "#059669",
      secondary: "#10B981",
      accent: "#065F46",
      background: "#F0FDF4",
      surface: "#FFFFFF",
      text: "#065F46",
      textSecondary: "#374151",
      success: "#10B981",
      warning: "#D97706",
      error: "#DC2626",
      overlay: "rgba(6, 95, 70, 0.1)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
      hero: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
      card: "linear-gradient(135deg, #FFFFFF 0%, #F9FDF9 100%)",
    },
  },
  midnight: {
    name: "Midnight Dark",
    description: "Sleek and modern dark theme",
    colors: {
      primary: "#8B5CF6",
      secondary: "#A78BFA",
      accent: "#C084FC",
      background: "#0F0F1A",
      surface: "#1E1E2E",
      text: "#E2E8F0",
      textSecondary: "#94A3B8",
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
      overlay: "rgba(255, 255, 255, 0.1)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
      hero: "linear-gradient(135deg, #0F0F1A 0%, #1E1E2E 100%)",
      card: "linear-gradient(135deg, #1E1E2E 0%, #2D2D3D 100%)",
    },
  },
  coral: {
    name: "Coral Reef",
    description: "Vibrant and tropical coral theme",
    colors: {
      primary: "#FF6B8A",
      secondary: "#4ECDC4",
      accent: "#FFD93D",
      background: "#FFF5F7",
      surface: "#FFFFFF",
      text: "#2D3748",
      textSecondary: "#4A5568",
      success: "#48BB78",
      warning: "#ED8936",
      error: "#F56565",
      overlay: "rgba(45, 55, 72, 0.1)",
    },
    gradients: {
      primary: "linear-gradient(135deg, #FF6B8A 0%, #4ECDC4 100%)",
      hero: "linear-gradient(135deg, #FFF5F7 0%, #FED7E2 100%)",
      card: "linear-gradient(135deg, #FFFFFF 0%, #FFFAF0 100%)",
    },
  },
} as const;

// Theme context
interface ThemeContextType {
  currentTheme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
  themeConfig: (typeof themes)[ThemeVariant];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>("default");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("pulsepal-theme") as ThemeVariant;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Apply theme to CSS custom properties
  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;

    // Apply color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });

    // Apply gradient variables
    Object.entries(theme.gradients).forEach(([key, value]) => {
      root.style.setProperty(`--theme-gradient-${key}`, value);
    });

    // Save to localStorage
    localStorage.setItem("pulsepal-theme", currentTheme);
  }, [currentTheme]);

  const setTheme = (theme: ThemeVariant) => {
    setCurrentTheme(theme);
  };

  const value = {
    currentTheme,
    setTheme,
    themeConfig: themes[currentTheme],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeProvider;
