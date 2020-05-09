import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Clock from './Clock.js'
import * as serviceWorker from './serviceWorker';

// option1
// ReactDOM.render(
//   <Clock time={new Date().toTimeString()}/>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
