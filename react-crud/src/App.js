import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'
import SignIn from './Components/Auth/SignIn';
import CreateProject from './Components/Project/CreateProject';
import EditProject from './Components/Project/EditProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path="/login" component={SignIn}></Route>
          <Route path="/logout" component={Dashboard}></Route>
          <Route path="/createproject" component={CreateProject}></Route>
          <Route path="/editproject" component={EditProject}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
