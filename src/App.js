import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <div className="App">
          <Navbar />
          <BookList />
          <ThemeToggle />
        </div>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
