<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="getInfo">点击获取</button>
    <img :src="url" alt="">
    <br>
    <button @click='handleLogOut'>退出登录</button>
  </div>
</template>

<script>
import {getUserInfo} from '../api/user'
import {mapActions} from 'vuex'
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
    ...mapActions([
      "logout"
    ]),
    getInfo() {
      // axios.post('http://localhost:3000/getUserInfo', { userId: 21 }).then(res => {
      //   console.log(res) 
      // })
      getUserInfo({userId: 21}).then(res => {
        console.log(res)
        this.url = res.data.img
      })
    },
    handleLogOut() {
      this.logout()
      this.$router.push({name: 'login'})
    }
  }
}
</script>
