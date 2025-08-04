import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import themes, { Theme, ThemeName, setTheme, getTheme } from "./theme";

interface ThemeContextProps {
  currentTheme: Theme;
  switchTheme: (themeName: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getTheme());

  const switchTheme = (themeName: ThemeName) => {
    setTheme(themeName);
    setCurrentTheme(getTheme());
  };

  useEffect(() => {
    const root = document.documentElement;
    const { colors } = currentTheme;

    // Apply theme colors as CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
