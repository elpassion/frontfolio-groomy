import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './components/App';

WebFont.load({
  google: {
    families: ['Khula:n4,n7']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
