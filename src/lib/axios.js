import axios from 'axios'
import {baseURL} from '../config'

class HttpRequest{
  constructor(baseUrl = baseURL){
  this.baseUrl = baseUrl
  this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {

      }
    }
    return config
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      if(!Object.keys(this.queue)) 
      // Spin.show()
      this.queue[url] = true;
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      this.queue[url] = true;
      const {data, status} = res
      return {data, status}
    },error => {
      this.queue[url] = true;
      return Promise.reject(error)
    })
  }

  request (options){
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest