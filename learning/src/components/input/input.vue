<template>
  <input type="text" :value='currentValue' @change='handleChange' @blur="handleBlur">
</template>

<script>
import emitter from '../../mixins/emitter'

export default {
  name: 'iInput',
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    handleChange(event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    handleBlur() {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
  }

}
</script>

<style>

</style>
