import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import HomeIndex from "./modules/home/index.jsx"

function hashLinkScroll() {
  const {hash} = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated, this is
    // required when navigating from a different page so that the element is
    // rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      history.pushState("", document.title, window.location.pathname +
                                            window.location.search);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 0);
  }
}

render((
  <Router history={browserHistory} onUpdate={hashLinkScroll}>
    <Route path="/" component={HomeIndex}></Route>
  </Router>
), document.getElementById("app"));
