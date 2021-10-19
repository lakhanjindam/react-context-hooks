import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    // console.log(this.context);
    // console.log(this.contextType);
    const { isLightTheme, light, dark } = this.context;
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
  }
}

export default Navbar;
