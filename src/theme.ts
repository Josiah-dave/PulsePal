// Theme configuration 
export const themes = {
  default: {
    primary: "34 197 94", // green-500
    secondary: "59 130 246", // blue-500
    accent: "168 85 247", // purple-500
    background: "255 255 255", // white
    foreground: "15 23 42", // slate-900
    muted: "248 250 252", // slate-50
    "muted-foreground": "100 116 139", // slate-500
    card: "255 255 255", // white
    "card-foreground": "15 23 42", // slate-900
    popover: "255 255 255", // white
    "popover-foreground": "15 23 42", // slate-900
    border: "226 232 240", // slate-200
    input: "226 232 240", // slate-200
    ring: "34 197 94", // green-500
    success: "34 197 94", // green-500
    warning: "245 158 11", // amber-500
    error: "239 68 68", // red-500
    info: "59 130 246", // blue-500
  },
  dark: {
    primary: "34 197 94", // green-500
    secondary: "59 130 246", // blue-500
    accent: "168 85 247", // purple-500
    background: "2 6 23", // slate-950
    foreground: "248 250 252", // slate-50
    muted: "15 23 42", // slate-900
    "muted-foreground": "148 163 184", // slate-400
    card: "15 23 42", // slate-900
    "card-foreground": "248 250 252", // slate-50
    popover: "15 23 42", // slate-900
    "popover-foreground": "248 250 252", // slate-50
    border: "30 41 59", // slate-800
    input: "30 41 59", // slate-800
    ring: "34 197 94", // green-500
    success: "34 197 94", // green-500
    warning: "245 158 11", // amber-500
    error: "239 68 68", // red-500
    info: "59 130 246", // blue-500
  },
  ocean: {
    primary: "14 165 233", // sky-500
    secondary: "6 182 212", // cyan-500
    accent: "139 92 246", // violet-500
    background: "248 250 252", // slate-50
    foreground: "2 44 34", // emerald-950
    muted: "241 245 249", // slate-100
    "muted-foreground": "71 85 105", // slate-600
    card: "255 255 255", // white
    "card-foreground": "2 44 34", // emerald-950
    popover: "255 255 255", // white
    "popover-foreground": "2 44 34", // emerald-950
    border: "203 213 225", // slate-300
    input: "203 213 225", // slate-300
    ring: "14 165 233", // sky-500
    success: "5 150 105", // emerald-500
    warning: "251 146 60", // orange-400
    error: "220 38 127", // pink-600
    info: "14 165 233", // sky-500
  },
  sunset: {
    primary: "251 146 60", // orange-400
    secondary: "239 68 68", // red-500
    accent: "236 72 153", // pink-500
    background: "254 252 232", // yellow-50
    foreground: "69 10 10", // red-950
    muted: "254 249 195", // yellow-100
    "muted-foreground": "154 52 18", // orange-800
    card: "255 255 255", // white
    "card-foreground": "69 10 10", // red-950
    popover: "255 255 255", // white
    "popover-foreground": "69 10 10", // red-950
    border: "254 215 170", // orange-200
    input: "254 215 170", // orange-200
    ring: "251 146 60", // orange-400
    success: "34 197 94", // green-500
    warning: "245 158 11", // amber-500
    error: "239 68 68", // red-500
    info: "59 130 246", // blue-500
  },
  forest: {
    primary: "34 197 94", // green-500
    secondary: "16 185 129", // emerald-500
    accent: "132 204 22", // lime-500
    background: "240 253 244", // green-50
    foreground: "20 83 45", // green-900
    muted: "220 252 231", // green-100
    "muted-foreground": "22 101 52", // green-800
    card: "255 255 255", // white
    "card-foreground": "20 83 45", // green-900
    popover: "255 255 255", // white
    "popover-foreground": "20 83 45", // green-900
    border: "187 247 208", // green-200
    input: "187 247 208", // green-200
    ring: "34 197 94", // green-500
    success: "34 197 94", // green-500
    warning: "245 158 11", // amber-500
    error: "239 68 68", // red-500
    info: "59 130 246", // blue-500
  },
};

// Current active theme - change this to switch themes
export const ACTIVE_THEME = "sunset"; // Options: 'default', 'dark', 'ocean', 'sunset', 'forest'

export const currentTheme = themes[ACTIVE_THEME];
