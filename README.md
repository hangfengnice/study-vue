# vue

- 组件标识 this._uid  solt  ref
- 组件中 对象默认值 default: () => {} 数组默认值 default: () => []

- .sync 语法糖

- 递归组件 需要有 name 退出的条件

- v-model 语法糖

兄弟组件的通信
bus

~/bus/index.js
import Vue from 'vue'
cosnt bus = new Vue()
export default bus

main.js
import bus from './bus'

Vue.prototype.$bus = bus

a 组件

methods: {
  handls() {
    this.$bus.emit('on-handle', val)
  }
}

b 组件

methods: {
  mounted() {
    this.$bus.on('on-handle', res => {
      console.log(res)
    })
  }
}

vuex

定义

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})

取之

state 取值
一般在 钩子函数 mounted 中执行
  主 state
    this.$store.state[name]
  模块中的 state
    this.$store.state[模块名][name]
  
  使用 vuex 的 mapState
  写法一
  ...mapState(['appName'])

  
模块中
 组件取值
 this.$store.state[模块名][name]
法 2
import {mapState} from 'vuex'

写法1
compoted: {
  ...mapState(['appName'])  
}
写法2
compoted: {
  ...mapState({
    appName: state => state.userName
  })  
}

// 具有 get set 方法
computed: {
  appName: {
    get() {

    },
    set() {

    }
  }
}

