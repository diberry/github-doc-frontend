/*
 * action types
 */

export const ADD_PROFILE = 'ADD_PROFILE'

/*
 * other constants
 */
/*
 * action creators
 */

export function addProfile(user:any) {
    return { type: ADD_PROFILE, user}
}
