import React from "react";
import "./App.css";
import Nasa from './Nasa';
import Textbox from "./Textbox";

function App() {
  

  return (
    <div className="App">
      <h1>
        Photo of the Day! <span role="img" aria-label='go!'>🚀</span>!
      </h1>
      <Nasa />
      <Textbox />
    </div>
    
  );
}

export default App;
