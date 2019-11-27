import axios from 'axios';
import Api from './api'
const baseUrl = '/api/login';

const loginApi = new Api(baseUrl)

Api.prototype.login = async credentials => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const login = async credentials => await loginApi.login(credentials)

export default { login };
