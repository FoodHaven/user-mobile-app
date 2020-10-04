import React from "react";
// import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "./styles/tailwind.css";

import UserDashboard from "./screens/userDashboard";
import AccountDashboard from "./screens/accountDashboard";


function App({ location }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/deals" component={UserDashboard} />
        <Route exact path="/account" component ={AccountDashboard} />
      </Switch>{" "}
    </Router>
  );
}

export default App;
