import { createContext, useContext } from "react";



const ThemeContext = createContext({
  themeMode: "light",
  switchTheme: () => {},
});

const ThemeProvider = ThemeContext.Provider;

const useTheme = () => {
  return useContext(ThemeContext);
};

export { useTheme, ThemeProvider };
