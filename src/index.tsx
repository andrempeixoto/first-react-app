import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// the component's sintax is the same of the HTML/XML,
// and its name has to start with a capital Letter;
// so it can be recognized inside the HTML as a component 
// as the <App /> example below

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);