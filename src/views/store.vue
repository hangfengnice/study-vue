<template>
  <div class="index">
    <Ainput @input="handleInput" />
    <!-- <p>{{inputValue}} - lastLetter is: {{imputValueLastLetter}}</p> -->
    <!-- <Ashow :content="inputValue" /> -->
    <p>appName: {{appName}}</p>
    <!-- <p>appNameWithVersion: {{appNameWithVersion}}</p> -->
    <hr>
    <p>userName: {{userName}}</p>
    <p>firstLetter: {{firstLetter}}</p>
    <!-- 
    <button @click='handleChangeAppname'>修改appName</button>
    <p>{{appVersion}}</p>
    
    <button @click='registerModule'>动态注册模块</button>
    <ul>
      <li v-for="(item, index) in todolist" :key='index'>{{item}}</li>
    </ul> -->
    <button @click='handleGetInfo'>获取信息 actions</button>
  </div>
</template>

<script>
import Ainput from "../components/Ainput";
import Ashow from "../components/Ashow";
// import {createNamespacedHelpers} from 'vuex'
// const {mapState} = createNamespacedHelpers('user')

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {

  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },

  components: {
    Ainput,
    Ashow
  },
  computed: {
    // 写法一 带上命名空间
    // ...mapState(['appName']),
    ...mapState(['userName']),

    ...mapState({
      appName: state => state.appName
    }),
    // ...mapState({
    //   userName1: state => state.userName
    // }),
    // 命名空间取值
    //  ...mapState("user", {
    //   userName: state => state.userName
    // }),
    // // 写法一
    // // 模块中有命名空间则以下写法无效
    // ...mapState(['appName', 'userName']),
    // 写法二 
    // ...mapState({
    //   appName: state => state.appName
    // }),
    // ...mapState({ // 模块中的 需要加上模块名
    //   appName: state => state.appName,
    //   userName: state => state.user.userName,
    //   appVersion: state => state.appVersion,
    //   todolist: state =>state.user.todo && state.user.todo.todolist
    // }),
    // appName() {
    //   return this.$store.state.appName
    // },
    // userName() {
    //   return this.$store.state.user.userName
    // }

    // getters 
    // vuex 操作
    // ...mapGetters(['appNameWithVersion', "firstLetter"]),
    // 基本操作
    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion
    // },
    firstLetter() {
      return this.$store.getters.firstLetter
    },
    imputValueLastLetter() {
      return this.inputValue.substr(-1,1)
    },


    
  },
  methods: {
    handleInput(val) {
      this.inputValue = val;
    },
    handleChangeAppname() {
      // this.$store.commit("SET_APP_NAME", 'newAppname')
      // this.$store.commit("SET_APP_NAME", {
      //   appName: 'newAppname'
      // })
      // this.$store.commit({
      //   type: "SET_APP_NAME",
      //   name: "appName12"
      // })
      // this.SET_APP_NAME('appName12')
      // this.$store.commit("SET_APP_VERSION")

      // user
      // this.$store.commit('SET_USER_NAME', 'hangfeng')
      // this.SET_USER_NAME('hangfeng and yingying and jiaying')
    },
    // mutations
    // ...mapMutations(['SET_APP_NAME', 'SET_USER_NAME']),

    // actions
    ...mapActions(['updateAppname', 'updateUsername']),
    handleGetInfo() {
      this.updateAppname({
        name: 'hahah'
      }),
      this.updateUsername()
    },
    // registerModule() {
    //   this.$store.registerModule(['user','todo'], {
    //     state: {
    //       todolist: [
    //       'learning mutations',
    //       'learning actions'
    //       ]
    //     }
    //   })
    // }
  }
};
</script>

<style lang='scss' scoped>
.index{
  padding: 50px;
  text-align: center;
}
</style>