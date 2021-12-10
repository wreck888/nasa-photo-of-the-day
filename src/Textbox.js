import React from "react";
import Title from './Title';
import Date from './Date';
import Explanation from "./Explaination";
import styled from 'styled-components';


const StyledTextbox = styled.div`

border: 1px solid rgb(210, 210, 210);
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
border-radius: 8px;
margin: 16px;
padding: 16px 8px 12px 16px;
background-color: #f3f3f3;
font-family: 'Space Mono', monospace;

`

function Textbox() {
    
    
  
    return (
      <StyledTextbox className="Textbox">
        <Title />
        <Date/>
        <Explanation/>
      </StyledTextbox>
    );
  }

  export default Textbox;