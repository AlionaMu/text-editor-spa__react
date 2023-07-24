import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./ThemeSwitcher.scss";

import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark");
  };

  return (
    <div className="theme-switcher__wrapper" aria-label="Theme toggle">
      <button
        className="button_theme button_theme-light"
        onClick={handleThemeChange}
      >
        <WbSunnyIcon
          color={theme === "dark" ? "disabled" : "success"}
        ></WbSunnyIcon>
      </button>
      <span className="theme-switcher__line">|</span>
      <button
        className="button_theme button_theme-dark"
        onClick={handleThemeChange}
      >
        <ModeNightIcon
          color={theme === "dark" ? "success" : "disabled"}
        ></ModeNightIcon>
      </button>
    </div>
  );
};
