import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLight: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  const themeToggle = () => {
    setTheme((prev) => ({
      ...prev,
      isLight: !prev.isLight,
    }));
  };

  const consoleLog = (data) => {
    console.log(data);
  };

  const [name, setName] = useState("kidus");

  return (
    <ThemeContext.Provider value={{ name, theme, themeToggle, consoleLog }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
