import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation
} from "react-router-dom";

import Login from "./login/login"
import Logout from "./login/logout"
import Callback from "./login/callback"
import Home from "./home/Home"
import FormGitHubFile from "./github/new-file-form"
import { Profile } from './user/profile'
import { AppStatus } from './app/appstatus'
import { ClientConfig } from './app/clientconfig'
import TelemetryProvider from './app/telemetry-provider';
import { Level } from './app/TelemetryService';
import { SeverityLevel, LoggingSeverity } from '@microsoft/applicationinsights-web';
import { addProfile } from './storage/client/actions'


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export function AppRouter(props: any) {

  const [logKey, setLogKey] = useState("");
  const [effectCount, setEffectCount] = useState(0)

  useEffect(() => {

    setEffectCount(effectCount + 1)
    //console.log(`AppRouter useEffect ...${JSON.stringify(props)}`)
    if (props && props.config.AZURE && props.config.AZURE.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY) {
      console.log(`AppRouter useEffect setLogKey ${props.config.AZURE.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY}`)
      setLogKey(props.config.AZURE.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY)
    }

    if (props && props.logger) {
      props.logger.trackTrace(
        {
          message: "Router appInsights running on FE",
          severityLevel: Level.Information
        });
    }

  }, [props]);

  function getParameterByName(key: any) {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      let hash: any = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars[key];
  }

  const authCallBackFromServerRoute = () => {
    const user = getParameterByName("userName")

    if(user){

      props.store.dispatch(addProfile(user))

      console.log(`store after add_profile = ${JSON.stringify(props.store.getState())}`)
      return (<Home store={props.store} />)
    } else {
      return (<div>authentication failed</div>)
    }

  }

  const debugInfo = () => {
    return (
      <div>
        <ul>
          <li>
            <AppStatus status={((props === null) ? false : true)} />
          </li>
          <li>
            <ClientConfig config={props.config} />
          </li>
          <li>
            <Profile config={props} />
          </li>
        </ul>
      </div>
    )
  }

  const navigationMenu = () => {
    return (
      <ul>
        <li>
          <Link to="/">Root</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/note">Note</Link>
        </li>

      </ul>
    )
  }

  const routedContent = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Home store={props.store}/>
        </Route>
        <Route exact path="/home">
          <Home store={props.store}/>
        </Route>
        <Route path="/login">
          <Login store={props.store}/>
        </Route>
        <Route path="/logout">
          <Logout store={props.store} />
        </Route>
        <Route path="/note">
          <FormGitHubFile store={props.store} />
        </Route>
        <Route path="/callback">
          {authCallBackFromServerRoute()}
        </Route>
      </Switch>)
  }

  const loggedRoute = () => {

  }

  const navAndContent = () => {
    return (
      <div>
        {navigationMenu()}
        <hr />
        {routedContent()}
      </div>
    )
  }

  const loggedNavAndContent = () => {
    return (
      <div>
        <TelemetryProvider instrumentationKey={logKey} after={props.loggerCallback} status={props.status}>
          {navAndContent()}
        </TelemetryProvider>
      </div>
    )
  }

  const renderPage = () => {
    console.log(`renderPage '${logKey}`)
    if (logKey) {
      return loggedNavAndContent()
    } else {
      return navAndContent()
    }
  }

  return (
    <Router>

      {renderPage()}

    </Router>
  );
}