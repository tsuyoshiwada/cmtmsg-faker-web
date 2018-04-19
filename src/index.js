import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ::selection {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  html {
    box-sizing: border-box;
    color: #666;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: 1.76;
  }

  body {
    margin: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
