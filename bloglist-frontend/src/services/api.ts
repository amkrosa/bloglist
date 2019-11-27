import axios, { AxiosResponse } from 'axios';

class Api {
  private baseUrl: string;
  private token: string;
  constructor(baseUrl: string, token: string) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  async get(id?: string) {
    let response;
    if (typeof id === 'undefined') {
      response = await axios.get(this.baseUrl);
    } else {
      response = await axios.get(`${this.baseUrl}/${id}`);
    }
    return response.data;
  }
  async create(object: Object, id?: string, options?: Object) {
    let response;
    if (typeof options === 'undefined') {
      response = await axios.post(this.baseUrl, object);
    } else {
      response = await axios.post(this.baseUrl, object, options);
    }
    return response.data;
  }

  async update(object: Object, id?: string, options?: Object) {
    let response: any;
    if (typeof options === 'undefined') {
      response = await axios.put(`${this.baseUrl}/${id}`, object);
    } else {
      await axios.put(`${this.baseUrl}/${id}`, object, options);
    }
    return response.data;
  }

  async remove(id: string, options?: Object) {
    let response;
    if (typeof options === 'undefined') {
      response = await axios.delete(`${this.baseUrl}/${id}`);
    } else {
      response = await axios.delete(`${this.baseUrl}/${id}`, options);
    }
    return response.data;
  }
}

export default Api;
