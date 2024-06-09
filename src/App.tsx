import React from "react";
import "./App.css";
import { PageReader } from "./components/PageReader";

function App() {

  return (
    <div className="App">
      <PageReader />
      <div id="content">
        <p>this is a heading</p>
        <p>this is a paragraph</p>
        <p>this is another paragraph</p>
      </div>
    </div>
  );
}

export default App;
