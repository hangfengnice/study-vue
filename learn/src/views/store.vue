<template>
  <div>

    <a-input v-model="inputValue"></a-input>
    <p>{{inputValue}}</p>
    <a-show :count='inputValue'></a-show>
    <p>appName: {{appName}}</p>
    <p>appNameWithVersion: {{appNameWithVersion}}</p>
    <p>userName: {{userName}}</p>
    <p>firstLetter: {{firstLetter}} </p>
    <p><button @click="handleChange">修改appName</button></p>
    <p>{{version}}</p>
    <p>
      <button @click="handleGetuser">请求数据</button>
    </p>

  </div>
</template>

<script>
import AInput from './Ainput'
import AShow from './AShow'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { getUserInfo } from '../api/user'
import axios from 'axios'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')

export default {
  data () {
    return {
      inputValue: ''
    }
  },
  mounted() {
    console.log(axios)
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      version: state => state.version
    }),
    ...mapGetters(['appNameWithVersion', 'firstLetter'])
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // }
    // appName() {
    //   return this.$store.state.appName
    // },
    // userName() {
    //   return this.$store.state.user.userName
    // }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    ...mapMutations(['setappname', 'setappversion']),
    ...mapActions(['updateAppName']),
    handleChange() {
      // this.appName = 'new Bapp'
      // this.$store.commit({
      //   type: 'setappname',
      //   value: 'newAppname'
      // })
      // this.setappname('newAppname')
      // this.setappversion()
      this.updateAppName()
      // this.$store.commit('setappversion')
    },
    handleGetuser() {
      // axios('/getUserInfo').then(res => {
      //   console.log(res)
      // })
      getUserInfo('/api/getUserInfo').then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style>

</style>
