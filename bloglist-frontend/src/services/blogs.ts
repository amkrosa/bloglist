import axios from 'axios';
import Api from './api';
import { Blog } from '../common/types';
const baseUrl = '/bloglist/api/blogs';

const blogsApi = new Api(baseUrl);
const config = {
  headers: { Authorization: blogsApi.token },
};

const getAll = async () => await blogsApi.get();
const get = async (id: string) => await blogsApi.get(id);
const create = async (object: Blog) =>
  await blogsApi.create(object, undefined, config);
const comment = async (object: string, id: string) =>
  await blogsApi.comment(object, id);
const update = async (object: Blog, id: string) =>
  await blogsApi.update(object, id);
const remove = async (id: string) => {
  try {
    await blogsApi.remove(id, config);
  } catch (e) {
    console.error(e);
  }
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  comment,
  api: blogsApi,
};
