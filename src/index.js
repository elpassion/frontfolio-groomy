import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { SiteThemeProvider } from './contexts/SiteThemeContext';

ReactDOM.render(
  <SiteThemeProvider>
    <App />
  </SiteThemeProvider>,
  document.getElementById('root')
);
