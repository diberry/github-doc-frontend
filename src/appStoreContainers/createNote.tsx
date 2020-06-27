import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { allActions } from '../storage/client/actions'
import { addGitHubNote } from '../http'
import { Field, reduxForm, formValueSelector, change } from 'redux-form'
import { bindActionCreators } from 'redux';
import addGitHubNoteServer from '../github/note';
import { createNotePending, createNoteSuccess, createNoteError} from '../storage/client/reducers'

const CreateNote = (props: any) => {

  const { handleSubmit, pristine, reset, submitting  } = props
  const { createNoteError, createNoteSuccess, createNotePending } = props

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

    const { createNoteSendNoteToServer } = props

    const {
      repoName,
      repoOwner,
      fileName,
      fileContent,
      committeremail,
      committername,
      commitmessage
    } = formValues;

    const repoInfo = {
      repo: {
        name: repoName.trim(),
        owner: repoOwner.trim(),
        path: fileName.trim()
      },
      commit: {
        content: fileContent.trim(),
        committername: committername.trim(),
        committeremail: committeremail.trim(),
        commitmessage: commitmessage.trim()
      }
    }

    createNoteSendNoteToServer(repoInfo)
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
          name="repoName"
          label="Enter repoName"
          type="text"
          component={reduxFormRenderInput}
          />

        <Field
          name="repoOwner"
          label="Enter repoOwner"
          type="text"
          component={reduxFormRenderInput}
          />
        <Field
          name="fileName"
          label="Enter fileName"
          type="text"
          component={reduxFormRenderInput}
          />
        <Field
          name="fileContent"
          label="Enter fileContent"
          type="text"
          component={reduxFormRenderInput}
          />
        <Field
          name="committeremail"
          label="Enter committeremail"
          type="text"
          component={reduxFormRenderInput}
          />
        <Field
          name="committername"
          label="Enter committername"
          type="text"
          component={reduxFormRenderInput}
          />
        <Field
          name="commitmessage"
          label="Enter commitmessage"
          type="text"
          component={reduxFormRenderInput}
          />

        <button type="submit" >
          Add Note
        </button>

      </form>
      <div>
      <span >Pending {JSON.stringify(createNotePending)}</span><br></br>
      <span >Error {JSON.stringify(createNoteError)}</span><br></br>
      <span >Success {JSON.stringify(createNoteSuccess)}</span><br></br>
      </div>
    </div>
  )
}

// validate form data
const validate = (formValues:any) =>{

  console.log("reduxFormValidate")

  const errors = {
    repoName:"",
    repoOwner:"",
    fileName:"",
    fileContent:"",
    committeremail:"",
    committername:"",
    commitmessage:""
  }

  if(!formValues.repoName){
    errors.repoName="You must enter a repoName"
  }
  //if(formValues?.title?.length < 3){
  //  errors.title +="Title must be 3 chars of more"
  //}
  if(!formValues.repoOwner){
    errors.repoOwner="You must enter a repoOwner"
  }
  if(!formValues.fileName){
    errors.fileName="You must enter a fileName"
  }
  if(!formValues.fileContent){
    errors.fileContent="You must enter a fileContent"
  }

  console.log(`reduxFormValidate errors = ${JSON.stringify(errors)}`)

  return errors;
}

// bring in state of dispatch to server to create note
const mapStateToProps = (state:any) => ({
  createNoteError: createNoteError(state),
  createNoteSuccess: createNoteSuccess(state),
  createNotePending: createNotePending(state)
})

// bring in dispatch to server to create note
const mapDispatchToProps = (dispatch:any) => bindActionCreators({
  createNoteSendNoteToServer: addGitHubNoteServer
}, dispatch)

export default reduxForm({
  form: 'noteCreate',
  validate
})(connect(
  mapStateToProps,
  mapDispatchToProps)(CreateNote))