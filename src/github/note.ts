import { addGitHubNote } from '../http'

import { createNoteError, createNoteSuccess, createNotePending } from '../storage/client/actions';

function addGitHubNoteServer(note:any):any {

    //@ts-ignore
    return (dispatch:any) => {

        // param isn't used so pass null
        dispatch(createNotePending(null));

        addGitHubNote(note)
        .then(data => dispatch(createNoteSuccess(data)))
        .catch(error => dispatch(createNoteError(error)));
    }
}

export default addGitHubNoteServer;