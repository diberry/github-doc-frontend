import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { allActions } from '../storage/client/actions'
import { addGitHubNote } from '../http'
import { Field, reduxForm } from 'redux-form'

const CreateNote = (props: any) => {

  const { handleSubmit, pristine, reset, submitting } = props

  let input: any;
  const [commit, setCommit] = useState({
    name:"",
    path:"",
    sha:"",
    size:"",
    url:"",
    html_url:"",
    git_url:"",
    download_url:"",
    type:""
  });

  useEffect(() => {


    console.log("CreateNote container")

  }, []);

  const onSubmit = async (
    formValues: any
  ): Promise<void> => {

    console.log("button clicked");
    console.log(`submitted formValues = ${JSON.stringify(formValues)}`)

    // TBD: call submit function that should be send in with props to this component
    //formProps.onSubmit(data)
    /*
    const repoNameElement = e.currentTarget.elements.namedItem('repoName') as HTMLInputElement
    const repoOwnerElement = e.currentTarget.elements.namedItem('repoOwner') as HTMLInputElement
    const fileNameElement = e.currentTarget.elements.namedItem('fileName') as HTMLInputElement
    const fileContentElement = e.currentTarget.elements.namedItem('fileContent') as HTMLInputElement
    const committerEmailElement = e.currentTarget.elements.namedItem('committeremail') as HTMLInputElement
    const committerNameElement = e.currentTarget.elements.namedItem('committername') as HTMLInputElement
    const commitMessageElement = e.currentTarget.elements.namedItem('commitmessage') as HTMLInputElement


    const repoInfo = {
      repo: {
        name: repoNameElement.value.trim(),
        owner: repoOwnerElement.value.trim(),
        path: fileNameElement.value.trim()
      },
      commit: {
        content: fileContentElement.value.trim(),
        committername: committerNameElement.value.trim(),
        committeremail: committerEmailElement.value.trim(),
        commitmessage: commitMessageElement.value.trim()
      }
    }

    // send to state
    //props.dispatch(allActions.noteActions.createNote(newFormInfo))
    const response = await addGitHubNote(repoInfo)

    if(response?.data?.content) setCommit(response?.data?.content)
    */
  }

  const getHtmlUrl = () =>{

    const { name, html_url} = commit;

    return (<a href={html_url} >{name}</a>)

  }

  const renderError = ({error, touched}:any)=> {
    if(error && touched){
      return (
        <div>{error}</div>
      )
    }
  }
  const reduxFormRenderInput = ({ input, label, type, meta }:any) =>{

    console.log(meta)

    if (meta?.touched && meta?.error) console.log("show error")

    return (
      <div className="field error">
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} autoComplete="on"/>
        {renderError(meta)}
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit(onSubmit)} >

        <Field
          name="title"
          label="Enter title"
          type="text"
          component={reduxFormRenderInput}
          />

        <Field
          name="description"
          label="Enter description"
          type="text"
          component={reduxFormRenderInput}
          />

        <div>
          <label>Repo name</label>
          <div>
            <input type="text" name="repoName"></input><br />
          </div>
        </div>

        <div>
          <label>Repo owner</label>
          <div>
            <input type="text" name="repoOwner"></input><br />
          </div>
        </div>

        <div>
          <label>File name</label>
          <div>
            <input type="text" name="fileName"></input><br />
          </div>
        </div>

        <div>
          <label>File content</label>
          <div>
            <input type="text" name="fileContent"></input><br />
          </div>
        </div>

        <div>
          <label>Commit Email</label>
          <div>
            <input type="text" name="committeremail"></input><br />
          </div>
        </div>

        <div>
          <label>Commit Name</label>
          <div>
            <input type="text" name="committername"></input><br />
          </div>
        </div>

        <div>
          <label>Commit Message</label>
          <div>
            <input type="text" name="commitmessage"></input><br />
          </div>
        </div>


        <button type="submit" >
          Add Note
        </button>

      </form>
      <div><p>{getHtmlUrl()}</p></div>
    </div>
  )
}

const validate = (formValues:any) =>{

  console.log("reduxFormValidate")

  const errors = {
    title:"",
    description:""
  }

  if(!formValues.title){
    errors.title="You must enter a title"
  }
  if(formValues?.title?.length < 3){
    errors.title +="Title must be 3 chars of more"
  }
  if(!formValues.description){
    errors.description="You must enter a title"
  }

  console.log(`reduxFormValidate errors = ${JSON.stringify(errors)}`)

  return errors;
}

export default reduxForm({
  form: 'noteCreate',
  validate
})(CreateNote)