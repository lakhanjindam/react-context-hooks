import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => (
          <AuthContext.Consumer>
            {(AuthContext) => {
              console.log(context);
              console.log(AuthContext);
              const { isAuthenticated, toggleAuth } = AuthContext;
              const { isLightTheme, light, dark } = context;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context-hooks app</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged in" : "Logged out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                  </ul>
                </nav>
              );
            }}
          </AuthContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
