import React, { useState, useEffect } from 'react';
import { logoutUserSession } from '../http'
import { removeProfile } from '../storage/client/actions'

export type DataContainer = {
  authenticationUrl: string
}

export function Logout(props: any) {

  const [data, setData] = useState({
    authenticationUrl: ""
  } as DataContainer)

  useEffect(() => {

      console.log(`logout props - ${JSON.stringify(props)}`)

    }, []);

  const onClick = async (
    e: any
  ): Promise<void> => {
      e.preventDefault()
      console.log("logout clicked");
      await logUserOutFromState();
      await logUserOutFromServer();
  }

  const logUserOutFromServer = async() => {
    console.log("logUserOutFromServer clicked");
    await logoutUserSession();
  }
  const logUserOutFromState = async() => {
    console.log("logUserOutFromState clicked");
    props.store.dispatch(removeProfile({}))
  }


  return (
    <div className="container">
      <button onClick={onClick}>Logout</button>
    </div>
  );
}

export default Logout;