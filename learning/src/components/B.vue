<template>
  <div @click="handleA">
    b zujian
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
  name: 'componentB',
  mixins: [emitter],
  created() {
    this.$on('on-message', val => {
      console.log(val)
    })
  },
  methods: {
    handleA() {
      this.dispatch('componentA', 'on-message-a', 'form B')
    }
  }
}
</script>

<style>

</style>
