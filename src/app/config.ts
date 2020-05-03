import { getClientConfig } from '../http'


const getApplicationStatus = async ():Promise<any> => {
    return await getClientConfig();
}

export {
    getApplicationStatus
}