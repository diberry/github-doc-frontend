import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./login/login"
import Callback from "./login/callback"
import Home from "./home/Home"
import FormGitHubFile from "./github/new-file-form"
import User from './user/profile'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export function AppRouter() {


const handleAuthentication = (nextState: any, replace: any) => {
    /*if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }*/
    console.log("handleAuthentication")
  }

  const props = {
      "hello":"goodbye"
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/note">Note</Link>
          </li>
          <li>
            <User></User>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/note">
            <FormGitHubFile />
          </Route>
          <Route path="/callback">
              handleAuthentication(props)
              return <Callback {...props}/>
          </Route>
          <Route path="/profile">
              <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}