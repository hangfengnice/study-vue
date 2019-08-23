<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="getInfo">点击获取</button>
    <img :src="url" alt="">
    <br>
    <button @click='handleLogOut'>退出登录</button> -->
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter='10'>
      <i-col span='12'></i-col>
      <i-col span='12'></i-col>
    </Row>
    <Row :gutter='10' class='blue'>
      <i-col :md='6' :sm='12' :xs='24'></i-col>
      <i-col :md='6' :sm='12' :xs='24'></i-col>
      <i-col :md='6' :sm='12' :xs='24'></i-col>
      <i-col :md='6' :sm='12' :xs='24'></i-col>
    </Row>
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

<style lang="scss" scoped>
  .home{
    .ivu-col{
      height: 50px;
      margin: 10px 0 0;
      background-color: pink;
      background-clip: content-box;
    }
    .blue {
      .ivu-col {
        background-color: rgb(139, 211, 245);
        background-clip: content-box;
      }
    }
  }
</style>
