import axios from 'axios'
import {baseURL} from '../config'
import {getToken} from '../lib/utils'

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
      config.headers['Authorization'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      this.queue[url] = true;
      const {data} = res
      return {data}
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