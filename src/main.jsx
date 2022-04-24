import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import { dark } from './styles/themes/dark';

import { Home } from './templates';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
