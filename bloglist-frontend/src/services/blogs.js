import axios from "axios";
import Api from "./api"
const baseUrl = "/api/blogs";

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const config = {
  headers: { Authorization: token }
};
console.log(config)

const blogsApi = new Api(baseUrl)
Api.prototype.comment = async (object, id) => {
  const response = await axios.post(`${baseUrl}/${id}/comments`, object, config);
  return response.data
}
console.log(blogsApi)

const getAll = async () => await blogsApi.get()
const get = async (id) => await blogsApi.get(id)
const create = async (object) => await blogsApi.create(object, config)
const comment = async (object, id) => await blogsApi.comment(object, id)
const update = async (object, id) => await blogsApi.update(object,id)
const remove = async (id) => await blogsApi.remove(id)

export default { getAll, get, setToken, create, update, remove, comment };
