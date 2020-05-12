import axios from 'axios';

const getApiHttp = () => {

  let config = {
    baseURL: 'http://localhost:9000/api/',
    timeout: 5000,
    withCredentials: true
  }

  return axios.create(config);
}

const getServerStatus = async ():Promise<any> => {

  try {
    const request = getApiHttp()

    const contents = await request({
      method: 'GET',
      url: `status`
    });

    const serverStatus:boolean = (contents && contents.data) ? true : false;

    return serverStatus;

  } catch (err) {

  }

}

const getClientConfig = async () => {

  try {
    const request = getApiHttp()

    const contents = await request({
      method: 'GET',
      url: `/client/config`
    });

    console.log(`http getClientConfig ${JSON.stringify(contents.data)}`)
    return (contents && contents.data) ? contents.data : {};
  } catch (err) {
    //console.log(err);
  }

}

const getUserProfile = async () => {
  try {
    const request = getApiHttp()

    const contents = await request({
      method: 'GET',
      url: `user`
    });

    return (contents && contents.data) ? contents.data : null;
  } catch (err) {

  }
}

const logoutUserSession = async () => {
  try {
    const request = getApiHttp()

    const contents = await request({
      method: 'GET',
      url: `logout`
    });

    return (contents && contents.data) ? contents.data : null;
  } catch (err) {

  }
}

export {
  getUserProfile,
  getServerStatus,
  getClientConfig,
  logoutUserSession
}