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
import Dashboard from "./screens/restaurant/dashboard";
import Menu from "./screens/restaurant/menu";
import CampaignDashboard from "./screens/campaign/campaignDashboard";

// Admin
import Admin from "./screens/admin/admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/campaign" component={CampaignDashboard} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={Main} />
      </Switch>{" "}
    </Router>
  );
}

export default App;
