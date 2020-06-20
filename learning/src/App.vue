<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/form">form</router-link> |
      <router-link to="/display">display</router-link> |
      <router-link to="/alert">alert</router-link> |
      <router-link to="/table-render">table-render</router-link> |
      <router-link to="/table-slot">table-slot</router-link> |
      <router-link to="/table-slot-render">table-slot-render</router-link> |
      <router-link to="/table-render-third">table-render-third</router-link> |
      <router-link to="/tree">tree</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
