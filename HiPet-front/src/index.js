import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Globalstyles from './styles/GlobalStyles';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes';

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(
  //<React.StrictMode>
  <ThemeProvider theme={dark}>
    <BrowserRouter>
      <Globalstyles />
      <App />
    </BrowserRouter>
  </ThemeProvider>
  //</React.StrictMode>
);