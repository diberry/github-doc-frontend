import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppRouter } from './Router';
import { getApplicationStatus } from './app/config';
import { Level, getAppInsights } from './app/TelemetryService';

const DEBUG = false;

/* props contains redux store */
function App(props:any) {

  const [config, setConfig] = useState(null);
  const [logger, setLogger] = useState(null);

  const initializeApp = async () => {

    const status = await getApplicationStatus();

    console.log(`app initializeApp ${JSON.stringify(status)}`)

    if(status && status.AZURE) {

      status.debug = (DEBUG) ? true : false;
      setConfig(status)
    }

    return;
  }

  const initializeLogger = async (logProvider:any) => {

    if(logProvider) {


      const appInsights = getAppInsights()

      setLogger(appInsights);
      console.log("App appInsights running on FE");

      appInsights.trackTrace(
        { message: "App appInsights running on FE",
          severityLevel: Level.Information});
    } else {
      console.log("appInsights NOT running on FE because logProvider is empty");
    }
  }

  useEffect(() => {

    initializeApp().then( () => {
      console.log("app initialized")
    }).catch(err => {
        console.log(`app init error ${err}`)
      })
    }, []);


    const appLoadingScreen = () =>{
      console.log("App appLoadingScreen...")
      return (<div>Loading...</div>)
    }

    const allLoadedScreen = () =>{
      console.log(`App allLoadedScreen...${JSON.stringify(config)}`)
      return (<AppRouter store={props.store} logger={logger} loggerCallback={initializeLogger} config={config} ></AppRouter>)
    }

  return (config) ? allLoadedScreen() : appLoadingScreen()

}

export default App;
