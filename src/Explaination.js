import React, { useState, useEffect } from "react";
import axios from 'axios';



function Explaination() {
    const [explaination, setExplaination] = useState('');
    
  
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
        //   console.log(response.data)
          setExplaination(response.data.explaination)
        })
    }, [])
  
  
    return (
      <div className="Explaination">
        <p>{explaination}</p>
      </div>
    );
  }

  export default Explaination;