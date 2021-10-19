import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar />
        <BookList />
        <ThemeToggle />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
