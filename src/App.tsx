import React from 'react';
import { Switch, Route, Link, useHistory } from "react-router-dom";


import './App.css';
import { authorization, context } from './common';
import AddUser from './components/AddUser';
import SignIn from './components/SignIn';
import UpdatePassword from './components/UpdatePassword';
import UserList from './components/UserList';

function App() {
  const [isSignedIn, setSignedIn] = React.useState(context.isSignedIn());
  const history = useHistory();
  authorization.tokenInfoChanged = () => setSignedIn(context.isSignedIn());
  const renderSignIn = () => {
    if (isSignedIn)
      return (<span>Hello {context.user.name} | 
      <Link to="/update-password">Update Password</Link>
      <button onClick={() => {
        authorization.signOut();
        history.push("/sign-in");
      }}>Sign Out</button>
      </span>)
    else
      return <Link to="/sign-in">Sign In</Link>
  }
  return (
    <div className="App">
      <h1>Remult with React</h1>
      <nav>
        <Link to="/users">User List</Link> |
        <Link to="/add-user">Add User</Link> |
        {renderSignIn()}
      </nav>
      <Switch>
        <Route exact path={["/", "/users"]} component={UserList} />
        <Route exact path={["/add-user"]} component={AddUser} />
        <Route exact path={["/sign-in"]} component={SignIn} />
        <Route exact path={["/update-password"]} component={UpdatePassword} />
      </Switch>
    </div>
  );
}

export default App;
