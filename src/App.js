import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import HomePage from "./PageComponents/HomePage";

function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <Router>
          <HomePage path="/" />
        </Router>
      </body>
    </div>
  );
}

export default App;
