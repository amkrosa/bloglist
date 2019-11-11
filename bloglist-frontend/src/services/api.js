import axios from 'axios'

class Api {
  token=null
  constructor(baseUrl, token){
    this.baseUrl = baseUrl
  }


  async get(id){
    let response
    if (typeof(id)==="undefined"){
      response = await axios.get(this.baseUrl)
    }else{
      response = await axios.get(`${this.baseUrl}/${id}`)
    }
    return response.data
  }
  async create(object, id, options){
    let response
    if (typeof(options)==="undefined"){
      response=await axios.post(this.baseUrl, object)
    }else{
      response=await axios.post(this.baseUrl, object, options)
    }
    return response.data
  }

  async update(object, id, options){
    let response
    if (typeof(options)==="undefined"){
      response=await axios.put(`${this.baseUrl}/${id}`, object)
    }else{
      await axios.put(`${this.baseUrl}/${id}`, object, options)
    }
    return response.data
  }

  async remove(id, options){
    let response
    if (typeof(options)==="undefined"){
      response=await axios.delete(`${this.baseUrl}/${id}`)
    }else{
      response=await axios.delete(`${this.baseUrl}/${id}`, options)
    }
    return response.data
  }
}

export default Api