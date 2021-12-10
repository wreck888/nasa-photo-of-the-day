import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components';

import App from './App.js';
import theme from './Theme';

import './App.css';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
  document.querySelector('#root')
)