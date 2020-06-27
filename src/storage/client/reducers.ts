import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  ADD_PROFILE,
  REMOVE_PROFILE,
  CREATE_NOTE_PENDING,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_ERROR
} from './actions'


const initialState = {}
//TBD rename to profileReducer
function profile(state = initialState, action:any) {
  switch (action.type) {
    case ADD_PROFILE:
      console.log(`reducer profile add ${JSON.stringify(action.package)}`)
      return Object.assign({}, state, action.package)
    case REMOVE_PROFILE:
      console.log(`reducer profile remove ${JSON.stringify(action.package)}`)
        return  Object.assign({}, state, action.package);
    default:
      console.log(`reducer profile default ${JSON.stringify(state)}`)
      return state
  }
}
//TBD rename to noteReducer
function note(state = initialState, action:any) {
  switch (action.type) {
    case CREATE_NOTE_PENDING:
      console.log(`reducer note create ${JSON.stringify(action.package)}`)
      return {
        ...state,
        pending: true
    }
    case CREATE_NOTE_SUCCESS:

      const newState = {
        ...state,
        pending: false,
        success: action.package
    }

      return newState;

  case CREATE_NOTE_ERROR:
      return {
          ...state,
          pending: false,
          error: action.error
      }
    default:
      console.log(`reducer profile default ${JSON.stringify(state)}`)
      console.log(`reducer profile default acton ${JSON.stringify(action)}`)
      return state
  }
}

const gitHubNotesApp = combineReducers({
  profile,
  note,
  form: formReducer //required by redux-form
})

// selectors
export const createNotePending = (state:any) => {
  console.log(state?.note?.pending)
  return state?.note?.pending;
}
export const createNoteSuccess = (state:any) => {
  console.log(state?.note?.success)
  return state?.note?.success;
}
export const createNoteError = (state:any) => {
  console.log(state?.note?.error)
  return state?.note?.error;

}

export default gitHubNotesApp