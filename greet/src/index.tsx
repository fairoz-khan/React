import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greet } from './greet'
import { CssPrac } from './cssPrac'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Greet name={"Fairoz khan"} msgCount={15} />
    <CssPrac></CssPrac>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
