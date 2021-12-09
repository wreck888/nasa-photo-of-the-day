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
background-color: ${props => props.theme.primaryColor};

`
function App() {
  

  return (
    <div className="App">
      <StyledH1>
        NASA Photo of the Day!
      </StyledH1>
      <Nasa />
      <Textbox />
    </div>
    
  );
}

export default App;
