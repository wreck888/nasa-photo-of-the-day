import React, { useState, useEffect } from "react";
import axios from 'axios';



function Explanation() {
    const [explanation, setExplaination] = useState('');
    
  
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=XeZIrRd5dgLPWqODwpZkuvowXQD6vqfPzP8WCY5B')
        .then(response => {
        //   console.log(response.data)
          setExplaination(response.data.explanation)
        })
    }, [])
  
  
    return (
      <div className="Explanation">
        <p>{explanation}</p>
      </div>
    );
  }

  export default Explanation;