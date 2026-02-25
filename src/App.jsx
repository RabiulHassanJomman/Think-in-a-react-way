// import './assets/css/dark.css';
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global.styles";
import Tutorial from "./components/Tutorial";

export default function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
    console.log(mode);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ mode: mode }}>
        <themeContext.Provider value = {{toggleMode}}>
          <Tutorial />
        </themeContext.Provider>
      </ThemeProvider>
    </>
  );
}
