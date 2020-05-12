/*
 * action types
 */

export const ADD_PROFILE = 'ADD_PROFILE'
export const REMOVE_PROFILE = 'REMOVE_PROFILE'

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
