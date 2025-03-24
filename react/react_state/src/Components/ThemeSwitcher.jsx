import { useState } from "react";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{ background: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black", padding: "20px" }}>
      <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
