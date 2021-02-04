import React from "react";

import {
  Header,
  Experience,
  Portfolio,
  Education,
  Technologies,
} from "./components"

import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <div className="app">
        <Header />
        <div className="flex-row" >
          <Portfolio />
          <Experience />
        </div>
        <div className="flex-row">
          <Technologies />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
