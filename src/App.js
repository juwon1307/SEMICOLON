import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import Home from './pages/HomePage/Home.js';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
     
  );
}

export default App; 
