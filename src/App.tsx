import React from 'react';
import { Switch, Route, Link } from "react-router-dom";


import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>Remult with React</h1>
      <nav>
        <Link to="/users">User List</Link> |
        <Link to="/add-user">Add User</Link>
      </nav>
      <Switch>
        <Route exact path={["/", "/users"]} component={UserList} /> 
        <Route exact path={["/", "/add-user"]} component={AddUser} />
      </Switch>
    </div>
  );
}

export default App;
