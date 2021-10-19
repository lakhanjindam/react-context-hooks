import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context; //access only toggleTheme function using parameter passed for that function
    return <button onClick={toggleTheme}>Toggle the theme</button>;
  }
}
export default ThemeToggle;
