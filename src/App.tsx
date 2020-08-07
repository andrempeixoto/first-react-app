// This file is a component (.tsx = TypeScript + XML);
// components are functions that return an HTML

// when we work with the XML syntax inside the JavaScript,
// it is named .jsx (JavaScript + XML) = HTML inside JavaScript


import React from 'react';
import Routes from './routes';

import './assets/styles/global.css';


function App() {
  return (
    <Routes />
  );
}

export default App;
