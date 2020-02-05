import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route to="/" component={Dashboard}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
