import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    console.log(theme);
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ backgroud: theme.ui }}>the book1</li>
          <li style={{ backgroud: theme.ui }}>the book2</li>
          <li style={{ backgroud: theme.ui }}>the book3</li>
        </ul>
      </div>
    );
  }
}
export default BookList;
