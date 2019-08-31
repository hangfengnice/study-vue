import { login, authorization } from "../../api/user";
import { setToken, getToken } from "../../lib/utils";

const state = {
  userName: "module: user-- name: yingying"
};

const mutations = {
  SET_USER_NAME(state, params) {
    state.userName = params
  }
};
const getters = {
  firstLetter: state => {
    return state.userName.substr(0, 1)
  }
}
const actions = {
  updateUsername({commit, state, rootState}) {
    console.log(state.userName, rootState.appName);
  }
  // login({ commit }, { userName, password }) {
  //   return new Promise((resolve, reject) => {
  //     login({ userName, password })
  //       .then(res => {
  //         if (res.data.code === 200) {
  //           setToken(res.data.token);
  //           resolve();
  //         } else {
  //           reject(new Error("错误"));
  //         }
  //       })
  //       .catch(error => {
  //         reject(error);
  //       });
  //   });
  // },
  // authorization({ commit }, token) {
  //   return new Promise((resolve, reject) => {
  //     authorization().then(res => {
  //       if (parseInt(res.code) == 401) {
  //         reject(new Error("token error"));
  //       } else {
  //         resolve()
  //       }
  //     }).catch(error => {
  //       reject(error)
  //     });
  //   });
  // },
  // logout(){
  //   setToken('')
  // }
};

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};
