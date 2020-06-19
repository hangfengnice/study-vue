<template>
  <div>
    <div @click="handleClick">zujian a</div>
    <b-c></b-c>
  </div>
</template>

<script>
import BC from './B'
import emitter from '@/mixins/emitter'

export default {
  name: 'componentA',
  mixins: [emitter],
  components: {
    BC
  },
  created() {
    this.$on('on-message-a', val => {
      console.log(val)
    })
  },
  methods: {
    handleClick() {
      this.broadcast('componentB', 'on-message', 'Hello Vue.js')
    }
  }
}
</script>

<style>

</style>
