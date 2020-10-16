import React from "react";

import { Header, Experience, Portfolio, Education } from "./components"

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="flex-row" >
        <Portfolio />
        <Experience />
      </div>
      <div className="flex-row">
        <div className="section"></div>
        <Education />
      </div>
    </div>
  );
}

export default App;
