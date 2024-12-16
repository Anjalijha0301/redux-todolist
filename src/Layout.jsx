import React from "react";
import { useTheme } from "./theme";

function Layout() {
  const { theme, toggleTheme } = useTheme("light");

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default Layout;
