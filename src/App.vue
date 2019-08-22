<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/store">store</router-link>
      <router-link to="/countTo">countTo</router-link>
      <router-link to="/render_page">renderPage</router-link>
      <router-link to="/named_view">namedView</router-link>
      <router-link to="/menuPage">menuPage</router-link>

      <router-link to="/login">Login</router-link>
    </nav>

    <router-view default />
    <router-view name="email" />
    <router-view name="telphone" />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    text-decoration: none;
    padding-left: 8px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
