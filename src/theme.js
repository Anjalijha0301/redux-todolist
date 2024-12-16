import { useEffect, useState } from "react";

export const useTheme = (initialTheme = "light") => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || initialTheme;
  });
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };
  return { theme, toggleTheme };
};
