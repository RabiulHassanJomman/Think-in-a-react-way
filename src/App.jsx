import React from "react";
import Section from "./components/Section";
import ThemeContext from "./Contexts/themeContext";

class App extends React.Component {
  state = {
    theme: "dark",
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === "dark") {
          return { theme: "light" };
        }
        return { theme: "dark" };
      });
    },
  };

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state}>
          <Section></Section>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
