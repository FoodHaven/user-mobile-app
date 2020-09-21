import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
// Styles
import "./styles/tailwind.css";

// Screens
import Main from "./screens/main";
import Checkout from "./screens/checkout";
import Test from "./screens/test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/test" component={Test} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={Main} />
      </Switch>{" "}
    </Router>
  );
}

export default App;
