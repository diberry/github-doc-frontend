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
import { Profile } from './user/profile'
import { AppStatus }  from './app/appstatus'
import { ClientConfig } from './app/clientconfig'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export function AppRouter(props:any ) {


const handleAuthentication = (nextState: any, replace: any) => {
    /*if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }*/
    console.log("handleAuthentication")
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
              <AppStatus />
          </li>
          <li>
            <ClientConfig config={props.config} />
          </li>
          <li>
            <Profile config={props} />
          </li>
        </ul>

        <hr />

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

        </Switch>
      </div>
    </Router>
  );
}