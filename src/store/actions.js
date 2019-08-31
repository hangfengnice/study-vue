import {getAppname1} from '../lib/app'

export default {
  updateAppname({commit}, params) {
    console.log(params, a)
    getAppname1().then(res => {
      console.log(res)
    })
  }
}