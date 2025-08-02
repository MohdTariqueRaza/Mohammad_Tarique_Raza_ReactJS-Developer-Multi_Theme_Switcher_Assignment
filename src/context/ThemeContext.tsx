// src/context/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

type Theme = "theme1" | "theme2" | "theme3";
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("theme1");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme && ["theme1", "theme2", "theme3"].includes(savedTheme)) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
