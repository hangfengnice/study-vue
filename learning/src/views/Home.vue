<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <a-c></a-c>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AC from '@/components/A.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    AC
  }
}
</script>
