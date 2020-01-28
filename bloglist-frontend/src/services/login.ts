import axios from 'axios';
import Api from './api';
const baseUrl = '/bloglist/api/login';

const loginApi = new Api(baseUrl);

const login = async (credentials: Object) => await loginApi.login(credentials);

export default { login };
