import React, { useState, useEffect } from "react";
import axios from 'axios';



function Title() {
    const [title, setTitle] = useState([]);
    
  
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
        //   console.log(response.data)
          setTitle(response.data.title)
        })
    }, [])
  
  
    return (
      <div className="Title">
        <h2>{title}</h2>
      </div>
    );
  }

  export default Title;