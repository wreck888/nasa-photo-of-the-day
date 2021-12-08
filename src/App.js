import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Nasa from './Nasa';

function App() {
  

  return (
    <div className="App">
      <p>
        Photo of the Day! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Nasa />
    </div>
    
  );
}

export default App;
