<template>
  <div class="login">
    <input v-model='userName'>
    <br>
    <input type='password' v-model='password'>
    <button @click='handleSubmit'>登录</button>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: ""
    }
  },
  methods: {
    ...mapActions([
      "login"
    ]),
    handleSubmit() {
      // axios.get('/index').then(res => {
      //   console.log(res)
      // })
      this.login({
        userName: this.userName,
        password: this.password
      }).then(() => {
        console.log("success!")
        this.$router.push({
          name: "home"
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }

};
</script>

<style lang='scss' scoped>
</style>