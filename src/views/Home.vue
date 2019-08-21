<template>
  <div class="home">

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="getInfo">点击获取</button>
    <img :src="url" alt="">
  </div>
</template>

<script>
import {getUserInfo} from '../api/user'

export default {
  name: 'home',
  data() {
    return {
      url: ''
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    getInfo() {
      // axios.post('http://localhost:3000/getUserInfo', { userId: 21 }).then(res => {
      //   console.log(res) 
      // })
      getUserInfo({userId: 21}).then(res => {
        console.log(res)
        this.url = res.data.img
      })
    }
  }
}
</script>
