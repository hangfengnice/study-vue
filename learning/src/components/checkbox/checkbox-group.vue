<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsUpward } from '../../utils/assist'
import emitter from '../../mixins'

export default {
  name: 'iCheckboxGroup',
  minins: [emitter],
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  methods: {
    updateModel(update) {
      this.childrens = findComponentsUpward(this, 'iCheckbox')
      if (this.childrens.length) {
        const {value} = this
        this.childrens.forEach(child => {
          child.model = value
          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },
    change(data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('iFormItem', 'on-form-change', data)
    }
  },
  mounted() {
    this.updateModel(true)
  },
  watch: {
    value() {
      this.updateModel(true)
    }
  }

}
</script>

<style></style>
