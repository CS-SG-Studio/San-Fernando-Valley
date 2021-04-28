import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../Components/Navbar';
// pages

const ReactRouterSetup = () => {
  return (
    <Router>
      <NavBar/>
      <p>hello</p>
    </Router>
  );
};

export default ReactRouterSetup;
