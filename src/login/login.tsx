import React, { useState } from 'react';

export type DataContainer = {
  authenticationUrl: string
}

export function Login(formProps: any) {

  const [data, setData] = useState({
    authenticationUrl: ""
  } as DataContainer)

  return (
    <div className="container">
      <h1>GitHub Login</h1>
      <p><a href="https://github.com/login/oauth/authorize?client_id=6ada30539cef8ded6bf3&scope=user%20repo">GitHub Login</a></p>
    </div>
  );
}

export default Login;