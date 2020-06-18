<template>
  <button @click="handleBclick">
    hf
  </button>
</template>

<script>
export default {
  methods: {
    handleBclick() {
     console.log(this.$parent.$refs.ybtn.say())
    }
  },
}
</script>

<style>

</style>
