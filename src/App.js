import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import About from './pages/HomePage/About.js';
import DashBoard from './pages/DashBoard/DashBoard.js';
import {  Navbar } from './components';
import GlobalStyle from './globalStyles';
import MoreInfo from './pages/MoreInfo/MoreInfo.js';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <DashBoard/>
      <MoreInfo />
      <About />
      <Switch>
        <Route path="/" exact component={DashBoard} />
      </Switch>
    </Router>
     
  );
}

export default App; 
