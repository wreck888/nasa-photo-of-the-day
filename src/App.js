import React from "react";
import "./App.css";
import Nasa from './Nasa';
import Textbox from "./Textbox";

function App() {
  

  return (
    <div className="App">
      <p>
        Photo of the Day! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Nasa />
      <Textbox />
    </div>
    
  );
}

export default App;
