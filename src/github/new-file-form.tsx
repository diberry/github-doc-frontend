import React, { useState } from 'react';

export type DataContainer = {
  data1: string
}

export function FormGitHubFile(formProps: any) {

  const [data, setData] = useState({
    data1: ""
  } as DataContainer)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    console.log("button clicked");

    // TBD: call submit function that should be send in with props to this component
    formProps.onSubmit(data)
  }

  const handleChangeEvent = (event:any)=>{
    setData({
        data1: event.target.value
      } as DataContainer);
}
  return (
    <div className="container">

        <form onSubmit={handleSubmit} noValidate={true}>
        <input type="text" value={data.data1} onChange = {handleChangeEvent}></input><br />
        <button type="submit">Submit</button>
        </form>
        <hr></hr>
        <div>{JSON.stringify(data)}</div>
        <hr></hr>
    </div>
  );
}

export default FormGitHubFile;