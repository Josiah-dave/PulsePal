type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: string;
};

type ThemeName = "light" | "dark" | "highContrast";

const themes: Record<ThemeName, Theme> = {
  light: {
    colors: {
      primary: "#1E90FF",
      secondary: "#FF6347",
      background: "#F5F5F5",
      text: "#333333",
      accent: "#32CD32",
    },
    fonts: {
      body: "'Roboto', sans-serif",
      heading: "'Poppins', sans-serif",
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
    borderRadius: "8px",
  },
  dark: {
    colors: {
      primary: "#BB86FC",
      secondary: "#03DAC6",
      background: "#121212",
      text: "#FFFFFF",
      accent: "#CF6679",
    },
    fonts: {
      body: "'Roboto', sans-serif",
      heading: "'Poppins', sans-serif",
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
    borderRadius: "8px",
  },
  highContrast: {
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      background: "#FFFF00",
      text: "#000000",
      accent: "#FF00FF",
    },
    fonts: {
      body: "'Arial', sans-serif",
      heading: "'Verdana', sans-serif",
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
    borderRadius: "4px",
  },
};

let currentTheme: Theme = themes. highContrast;

export const setTheme = (themeName: ThemeName): void => {
  if (themes[themeName]) {
    currentTheme = themes[themeName];
  } else {
    console.warn(
      `Theme ${themeName} does not exist. Falling back to light theme.`
    );
    currentTheme = themes.light;
  }
};

export const getTheme = (): Theme => currentTheme;

export default themes;
export type { Theme, ThemeName };
