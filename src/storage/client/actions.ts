/*
 * action types
 */

export const ADD_PROFILE = 'ADD_PROFILE'
export const REMOVE_PROFILE = 'REMOVE_PROFILE'

export const CREATE_NOTE_PENDING = 'CREATE_NOTE_PENDING'
export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS'
export const CREATE_NOTE_ERROR = 'CREATE_NOTE_ERROR'
/*
 * other constants
 */
/*
 * action creators
 */
//https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
export function addProfile(user:any) {
    return { type: ADD_PROFILE, package: {user}}
}
export function removeProfile(user:any) {
  return { type: REMOVE_PROFILE,  package: {user}}
}

export function createNotePending(note:any) {
  return { type: CREATE_NOTE_PENDING}
}
export function createNoteSuccess(note:any) {

  const noteData = note?.data || note

  return { type: CREATE_NOTE_SUCCESS,  package:{noteData}}
}
export function createNoteError(error:any) {
  return { type: CREATE_NOTE_ERROR,  package:{error}}
}

export const allActions = {
  profileActions: {
    addProfile,
    removeProfile
  },
  noteActions: {
    createNotePending,
    createNoteSuccess,
    createNoteError
  }
}