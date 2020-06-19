<template>
  <label>
    <span>
      <input
        v-if="group"
        type="checkbox"
        :value="label"
        v-model="model"
        @change="change"
        :disabled="disabled"
      />
      <input
        v-else
        type="checkbox"
        :value="currentValue"
        @change="change"
        :disabled="disabled"
      />
    </span>
    <slot></slot>
  </label>
</template>

<script>
import emitter from '../../mixins/emitter'
import { findComponentUpward } from '../../utils/assist.js'

export default {
  name: 'iCheckbox',
  mixins: [emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  data() {
    return {
      currentValue: this.value,
      model: [],
      group: false,
      parent: null
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')
    if (this.parent) this.group = true
    if (this.group) {
      this.parent.updateModel()
    } else {
      this.updateModel()
    }
  },
  watch: {
    value(val) {
      if (val == this.trueValue || val == this.falseValue) {
        this.updateModel()
      } else {
        throw new Error('value should be trueValue or falseValue')
      }
    }
  },
  methods: {
    change(event) {
      if (this.disabled) return false
      const checked = event.target.checked
      this.currentValue = checked
      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)
      if(this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    },
    updateModel() {
      this.currentValue = this.value == this.trueValue
    }
  }
}
</script>

<style></style>
