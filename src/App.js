import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState([]);


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        // console.log(response.data.url)
        setNasaData(response.data.url)
      })
  }, [])


  return (
    <div className="App">
      <p>
        Photo of the Day! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <img src={nasaData}></img>
    </div>
  );
}

export default App;
