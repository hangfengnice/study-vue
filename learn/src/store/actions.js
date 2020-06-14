import { getAppName } from '../api/app';
export default {
  updateAppName({ commit }) {
    getAppName().then(res => {
      console.log(res);
      commit('setappname', res.info.appName);
    });
  }
};
