const getters = {
  appNameWithVersion: state => {
    return `${state.appName}v2.0`
  },
  authorNameWithStatus: (state) => {
    return state.authorName + ' good'
  }
}

export default getters