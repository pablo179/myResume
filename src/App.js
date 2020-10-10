import React from "react";

import { Header, Experience, Portfolio } from "./components"

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="flex-row" >
        <Portfolio />
        <Experience />
      </div>
    </div>
  );
}

export default App;
