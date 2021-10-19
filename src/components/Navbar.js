import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          console.log(context);
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context-hooks app</h1>
              <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
