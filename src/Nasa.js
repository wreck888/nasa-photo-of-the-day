import React, { useState, useEffect } from "react";
import axios from 'axios';



function Nasa() {
    const [nasaData, setNasaData] = useState([]);
  
  
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
          // console.log(response.data.url)
          setNasaData(response.data.url)
        })
    }, [])
  
  
    return (
      <div className="Nasa">
        <img src = {nasaData}></img>
      </div>
    );
  }

  export default Nasa;