import { getClientConfig, getServerStatus } from '../http'


const getApplicationStatus = async ():Promise<boolean> => {
    return await getServerStatus();
}
const getConfig = async () => {

    const result = await getClientConfig();
    return result;
}

export {
    getConfig,
    getApplicationStatus
}