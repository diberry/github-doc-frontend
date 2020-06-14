import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allActions } from '../storage/client/actions'


export function FormGitHubFile(formProps: any) {

  //@ts-ignore
  const note = useSelector(state => state.note);
  const dispatch = useDispatch()
  const [htmlUrl, setHtmlUrl] = useState(null);

  const formInfo = {
    repoName:"test-public"
  }

  useEffect(() => {
    dispatch(allActions.noteActions.createNote(formInfo))
  }, [])

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    console.log("button clicked");

    // TBD: call submit function that should be send in with props to this component
    //formProps.onSubmit(data)
    const repoNameElement = e.currentTarget.elements.namedItem('repoName') as HTMLInputElement

    const newFormInfo = {
      repoName: repoNameElement
    }
    dispatch(allActions.noteActions.createNote(newFormInfo))
  }

  const handleChangeEvent = (event:any)=>{
    console.log(`change event ${event.target.value}`)

}
  const getHtmlUrl = () =>{
    return (htmlUrl) ? <a href="${htmlUrl}"></a> : "";
  }

  return (
    <div className="container">

        <form onSubmit={handleSubmit} noValidate={true}>

        <div>
        <label>Repo</label>
        <div>
        <input type="text" name="repoName"></input><br />
        </div>
      </div>

        <button type="submit">Submit</button>
        </form>
        <hr>{getHtmlUrl()}</hr>

    </div>
  );
}

//export default FormGitHubFile;

export default FormGitHubFile