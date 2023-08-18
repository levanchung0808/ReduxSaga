import axios, {AxiosResponse} from 'axios';

let API_URL = 'http://14.241.235.252:8484/tvs_api_v1/api/';

interface ApiResponse {
  // Define the structure of the response data here
  results: 'S' | 'F'; // Adjust this based on your actual response structure
  // ... other properties ...
}

function* logintUserFromApi(
  username: string,
  password: string,
  machine_id: string,
): Generator<any, ApiResponse, any> {
  const urlLogin = API_URL + 'User/Login/';
  let param = {
    username: username,
    password: password,
    machine_id: machine_id,
  };
  const responses: AxiosResponse<ApiResponse> = yield axios
    .post(urlLogin, param)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log('err');
      console.log(err);
      throw err.toString();
    });
  return responses.data;
}

export const Api = {
  logintUserFromApi,
};
