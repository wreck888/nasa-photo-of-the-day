import React, { useState, useEffect } from "react";
import axios from 'axios';



function Date() {
    const [date, setDate] = useState([]);
    
  
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
        //   console.log(response.data)
          setDate(response.data.date)
        })
    }, [])
  
  
    return (
      <div className="Date">
        <h3>{date}</h3>
      </div>
    );
  }

  export default Date;