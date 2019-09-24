import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import HomePage from "./PageComponents/HomePage";
import English from "./PageComponents/en";
import French from "./PageComponents/fr";

function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <Router>
          <HomePage path="/" />
          <English path="/en" />
          <French path="/fr" />
        </Router>
      </body>
    </div>
  );
}

export default App;
