import { combineReducers } from 'redux'
import {
  ADD_PROFILE
} from './actions'


const initialState = {
}

function profile(state = initialState, action:any) {
  switch (action.type) {
    case ADD_PROFILE:
      console.log(`${JSON.stringify(action.package)}`)
      return Object.assign({}, state, action.package)
    default:
      return state
  }
}

const gitHubNotesApp = combineReducers({
  profile
})

export default gitHubNotesApp