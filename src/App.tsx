import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>Remult with React</h1>
      <Switch>
        <Route exact path={["/", "/users"]} component={UserList} />
      </Switch>
    </div>
  );
}

export default App;
