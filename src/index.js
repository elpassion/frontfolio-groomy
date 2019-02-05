import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './components/App';

WebFont.load({
  google: {
    families: ['Khula:400,700,800']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
