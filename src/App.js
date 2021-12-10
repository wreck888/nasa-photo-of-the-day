import React from "react";
import "./App.css";
import Nasa from './Nasa';
import Textbox from "./Textbox";
import styled from 'styled-components';


const StyledH1 = styled.h1`

border: 1px solid rgb(210, 210, 210);
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
border-radius: 8px;
margin: 16px;
padding: 16px 8px 12px 16px;
// background-color: ${props => props.theme.primaryColor};
background-color: #f3f3f3;

`
const StyledApp = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #2D82B7;
  
`

const StyledNasaTitle = styled.p`
    color: #07004D;
    font-family: 'Space Mono', monospace;
`

function App() {
  

  return (
    <StyledApp className="App">
      <StyledH1>
      <a href ='https://www.nasa.gov/'> <img src ='https://upload.wikimedia.org/wikipedia/commons/a/a3/NASA_Worm_logo.svg'/></a>
       <StyledNasaTitle>Photo of the Day!</StyledNasaTitle>
      </StyledH1>
      <Nasa />
      <Textbox />
    </StyledApp>
    
  );
}

export default App;
