import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  ADD_PROFILE,
  REMOVE_PROFILE,
  CREATE_NOTE
} from './actions'


const initialState = {
}
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
    case CREATE_NOTE:
      console.log(`reducer note create ${JSON.stringify(action.package)}`)
        return  Object.assign({}, state, action.package);
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

export default gitHubNotesApp