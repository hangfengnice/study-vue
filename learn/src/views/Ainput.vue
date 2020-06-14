<template>
  <input type="text" @input='handleInput' :value='value'>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput(e) {
      const value = e.target.value
      this.$emit('input', value)
    }
  }
}
</script>

<style>

</style>
