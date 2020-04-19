import axios from 'axios';

const getApiHttp = () => {

    let config = {
      baseURL: 'http://localhost:9000/api/',
      timeout: 5000,
      withCredentials: true
    }

    return axios.create(config);
}

const getServerStatus = async () => {

    try{
        const request = getApiHttp()

        const contents = await request({
            method: 'GET',
            url: `status`
          });

        return (contents && contents.data) ? contents.data : null;
    } catch (err){
        console.log(err);
    }

  }

const getUserProfile = async () => {

    const request = getApiHttp()

    const contents = await request({
        method: 'GET',
        url: `user`
      });

    return (contents && contents.data) ? contents.data : null;
  }

  export {
      getUserProfile, getServerStatus
  }