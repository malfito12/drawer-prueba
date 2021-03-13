import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DrawerPrincipal from './Components/Organimsm/DrawerPrincipal';
import Notes from './Components/Pages/Notes';
import Users from './Components/Pages/Users';

function App() {
  return (
    <Router>
      <DrawerPrincipal />
      <Switch>
        <Route path='/users' component={Users} />
        <Route path='/notes' component={Notes} />
      </Switch>
    </Router>
  );
}

export default App;
