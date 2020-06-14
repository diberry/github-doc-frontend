/*
 * action types
 */

export const ADD_PROFILE = 'ADD_PROFILE'
export const REMOVE_PROFILE = 'REMOVE_PROFILE'
export const CREATE_NOTE = 'CREATE_NOTE'
/*
 * other constants
 */
/*
 * action creators
 */

export function addProfile(user:any) {
    return { type: ADD_PROFILE, package: {user}}
}
export function removeProfile(user:any) {
  return { type: REMOVE_PROFILE,  package: {user}}
}

export function createNote(note:any) {
  return { type: REMOVE_PROFILE,  package:{note}}
}

export const allActions = {
  profileActions: {
    addProfile,
    removeProfile
  },
  noteActions: {
    createNote
  }
}