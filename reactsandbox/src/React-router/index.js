import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {HashRouter,Route, Switch, Link} from "react-router-dom"

// First argument: What we want to display (elements,etc...)
//Second argument: Where we want to display it (root div container)

ReactDOM.render(
  <React.StrictMode>
  
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
