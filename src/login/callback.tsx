import React from 'react';

const Callback = (props:any) => {


  return (
    <div className="container">
    <h4>{decodeURI(props.userName)}</h4>
  </div>
  )

  }

export default Callback;