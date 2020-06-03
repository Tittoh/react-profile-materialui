import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/react-profile.scss";

// pages for this product
import Home from "./views/Home/Home.js";
import Profile from "./views/Profile/Profile.js";
import Fe from "./views/Projects/ProjectsFe.js";
import Be from "./views/Projects/ProjectsBe.js";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="https://tittoh.github.io/react-profile-materialui/profile" component={Profile} />
      <Route path="https://tittoh.github.io/react-profile-materialui/fe" component={Fe} />
      <Route path="https://tittoh.github.io/react-profile-materialui/be" component={Be} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
