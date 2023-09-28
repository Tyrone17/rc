import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { MainDisplay, Keypad } from './App';
import { MainComponent } from './Components';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const main =  ReactDOM.createRoot(document.getElementById('app'));
main.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
