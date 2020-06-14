import Vue from 'vue'
export default {
  setappname(state, playload) {
    state.appName = playload
  },
  setappversion(state) {
    Vue.set(state, 'version', 'x.o')
    // state.version = 's.xs'
  }
}
