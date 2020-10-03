import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "./styles/tailwind.css";

import UserDashboard from "./screens/user/userDashboard";
import AccountDashboard from "./screens/user/accountDashboard";

// Admin
// import Admin from "./screens/admin/admin";

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
