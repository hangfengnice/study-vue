<template>
  <div class="index">
    <List :list='list' :render='renderFunc'></List>
  </div>
</template>

<script>
import List from '../components/list/list'

export default {
  name: "renderPage",
  components: {
    List
  },
  data() {
    return {
      list: [
        {name: "hangfeng"},
        {name: "yingying"}
      ]
    }
  },
  methods: {
    // renderFunc(h, name) {
    //   return h('i', {
    //     style: {
    //       color: "pink"
    //     }
    //   }, name)
    // }
    ok() {

    },
    renderFunc(h, name) {
      return (
        <i on-click={this.handleClick} style={{color: 'pink'}}>{name}</i>
      )
    },
    handleClick(event) {
      console.log(event)
    }
  }
};
</script>

<style lang='scss' scoped>
</style>