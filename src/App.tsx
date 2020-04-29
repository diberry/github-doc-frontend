import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppRouter } from './Router';
import { getConfig, getApplicationStatus } from './app/config';

function App() {

  const [serverStatus, setServerStatus] = useState(false);
  const [config, setConfig] = useState({});

  const initializeApp = async () => {
    const initstatus = await getApplicationStatus();
    const initconfig = await getConfig();

    console.log(`app ${JSON.stringify(initconfig)}`)

    setServerStatus(initstatus);
    setConfig(initconfig);

    return;
  }

  useEffect(() => {

    initializeApp().then( () => {
      console.log("app initialized")
    }).catch(err => {
        console.log(`app init error ${err}`)
      })
    }, []);

  return (
    <AppRouter config={config} status={serverStatus}></AppRouter>
  );
}

export default App;
