import axios from 'axios';

let API_URL = 'http://14.241.235.252:8484/tvs_api_v1/api/';

interface ApiResponse {
  results: string,
  errorData: string,
  totalTable: number,
  table: {},
  totalRow: number,
  data: {}
}

function* logintUserFromApi(
  username: string,
  password: string,
  machine_id: string,
){
  const urlLogin = API_URL + 'User/Login/';
  let param = {
    username: username,
    password: password,
    machine_id: machine_id,
  };
  const responses : ApiResponse = yield axios
    .post(urlLogin, param)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log('err');
      console.log(err);
      throw err.toString();
    });
    
  return responses;
}

export const Api = {
  logintUserFromApi,
};
