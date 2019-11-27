import Api from './api';
const baseUrl = '/api/users';

const usersApi = new Api(baseUrl);

const getAll = async () => await usersApi.get();
const create = async object => await usersApi.create(object);

export default { getAll, create };
