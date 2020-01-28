import axios, { AxiosResponse } from 'axios';

class Api {
  private baseUrl: string;
  private _token?: string;
  constructor(baseUrl: string, token?: string) {
    this.baseUrl = baseUrl;
    this._token = `bearer ${token}`;
  }

  set token(newToken: string | null) {
    this._token = `bearer ${newToken}`;
  }
  get token(): string | null {
    if (this._token !== undefined) return this._token;
    else return null;
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

  async comment(object: Object, id: string, options?: Object) {
    const response = await axios.post(
      `${this.baseUrl}/${id}/comments`,
      object,
      options,
    );
    return response.data;
  }

  async login(credentials: Object) {
    const response = await axios.post(this.baseUrl, credentials);
    return response.data;
  }
}

export default Api;
