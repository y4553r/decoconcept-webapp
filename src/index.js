import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import whyDidYouRender from "@welldone-software/why-did-you-render";

// whyDidYouRender(React, {
//   onlyLogs: true,
//   titleColor: "green",
//   diffNameColor: "darkturquoise",
//   include: [/[A-za-z]/]
// });

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
