import axios from "axios";
import Api from "./api";
import { Blog } from "../common/types";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`;
};

const config = {
  headers: { Authorization: token }
};

const blogsApi = new Api(baseUrl);

const getAll = async () => await blogsApi.get();
const get = async (id: string) => await blogsApi.get(id);
const create = async (object: Blog) =>
  await blogsApi.create(object, undefined, config);
const comment = async (object: Blog, id: string) =>
  await blogsApi.comment(object, id);
const update = async (object: Blog, id: string) =>
  await blogsApi.update(object, id);
const remove = async (id: Blog) => await blogsApi.remove(id);

export default { getAll, get, setToken, create, update, remove, comment };
