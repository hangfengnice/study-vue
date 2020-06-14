
import axios from 'axios'


class HttpRequest {
  constructor() {
    this.baseUrl = 'http://localhost:8080'
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      headers: {

      }
    }
    return config
  }
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      console.log(res);
      return res
    }, error => {
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}
export default HttpRequest
