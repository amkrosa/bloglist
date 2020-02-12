import axios, { AxiosResponse } from 'axios';

class Api {
  private _baseUrl: string;
  private _token?: string;
  private _config?: Object;
  constructor(baseUrl: string, token?: string) {
    this._baseUrl = baseUrl;
    this._token = `bearer ${token}`;
  }

  set token(newToken: string | null) {
    this._token = `bearer ${newToken}`;
    this._config = {
      headers: { Authorization: this._token },
    };
  }
  get token(): string | null {
    if (this._token !== undefined) return this._token;
    else return null;
  }

  async get(id?: string) {
    let response;
    try {
      if (typeof id === 'undefined') {
        response = await axios.get(this._baseUrl);
      } else {
        response = await axios.get(`${this._baseUrl}/${id}`);
      }
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
  async create(object: Object, id?: string, withAuth?: boolean) {
    let response;
    try {
      if (typeof withAuth === 'undefined') {
        response = await axios.post(this._baseUrl, object);
      } else {
        response = await axios.post(this._baseUrl, object, this._config);
      }
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }

  async update(object: Object, id?: string, withAuth?: boolean) {
    let response: any;
    try {
      if (typeof withAuth === 'undefined') {
        response = await axios.put(`${this._baseUrl}/${id}`, object);
      } else {
        await axios.put(`${this._baseUrl}/${id}`, object, this._config);
      }
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }

  async remove(id: string, withAuth?: boolean) {
    let response;
    try {
      if (typeof withAuth === 'undefined') {
        response = await axios.delete(`${this._baseUrl}/${id}`);
      } else {
        response = await axios.delete(`${this._baseUrl}/${id}`, this._config);
      }
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }

  async comment(object: string, id: string) {
    try {
      const response = await axios.post(
        `${this._baseUrl}/${id}/comments`,
        object,
        this._config,
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }

  async login(credentials: Object) {
    try {
      const response = await axios.post(this._baseUrl, credentials);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default Api;
