<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toArgu">toArgu</button>
  </div>
</template>

<script>
export default {
  methods: {
    toArgu () {
      this.$router.push({
        path: '/argu/lison'
        // params: {
        //   name: 'lison'
        // }
      })
    }
  }
}
</script>
