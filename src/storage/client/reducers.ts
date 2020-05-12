import { combineReducers } from 'redux'
import {
  ADD_PROFILE,
  REMOVE_PROFILE
} from './actions'


const initialState = {
}

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

const gitHubNotesApp = combineReducers({
  profile
})

export default gitHubNotesApp