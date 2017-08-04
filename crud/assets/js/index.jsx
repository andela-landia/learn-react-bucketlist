import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import HomeIndex from "./modules/home/index.jsx"


render((
  <Router history={browserHistory}>
    <Route path="/" component={HomeIndex}></Route>
  </Router>
), document.getElementById("app"));
