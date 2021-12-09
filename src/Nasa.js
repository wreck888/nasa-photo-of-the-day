import React, { useState, useEffect } from "react";
import axios from 'axios';

import styled from 'styled-components';


const StyledNasa = styled.div`

border: 1px solid rgb(210, 210, 210);
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
border-radius: 8px;
margin: 16px;
padding: 16px 8px 12px 16px;
background-color: ${props => props.theme.primaryColor};

`

function Nasa() {
    const [nasaData, setNasaData] = useState([]);
  
  
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=XeZIrRd5dgLPWqODwpZkuvowXQD6vqfPzP8WCY5B')
        .then(response => {
          console.log(response.data)
          setNasaData(response.data.url)
        })
    }, [])
  
  
    return (
      <StyledNasa className="Nasa">
        <img src = {nasaData}></img>
      </StyledNasa>
    );
  }

  export default Nasa;