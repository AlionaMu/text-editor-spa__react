import { useLayoutEffect, useState } from "react";

const defaultTheme = "light";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("lang") || defaultTheme
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("lang", theme);
  }, [theme]);

  return { theme, setTheme };
};
