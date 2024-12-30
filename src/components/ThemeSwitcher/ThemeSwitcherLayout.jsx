import React, { useEffect, useState } from "react";
import Switch from "./Switch";
import Card from "./Card";
import { ThemeProvider, useTheme } from "./ThemeSwitcher";

function ThemeSwitcherLayout() {
  const [themeMode, setThemeMode] = useState("light");

  const switchTheme = (isDarkTheme) => {
    setThemeMode(isDarkTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div>
      <ThemeProvider value={{ themeMode, switchTheme }}>
        <Switch />
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default ThemeSwitcherLayout;
