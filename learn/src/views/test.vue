<template>
  <div @click="handleTest">
    test click
  </div>
</template>

<script>
export default {
  mounted() {
    this.$on('test', val => {
      console.log(val)
    })
  },
  methods: {
    handleTest() {
      this.$emit('test', 'hello test')
    }
  }
}
</script>

<style>

</style>
