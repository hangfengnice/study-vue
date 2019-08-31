<template>
  <div class="login">
    <input v-model='userName'>
    <br>
    <input type='password' v-model='password'>
    <button @click='handleSubmit'>登录</button>
    <button @click='handleClick'>删除List</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'
import { close } from 'fs';

export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: "",
      list: [1, 2, 3, 4]
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
    },
    handleClick() {
      console.log(this.list)
      this.$delete(this.list, 1)
      console.log(this.list)
    }
  }

};
</script>

<style lang='scss' scoped>
</style>