<template>
  <div>
    <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">
      {{ label }}
    </label>
    <div>
      <slot></slot>
      <div v-if="validateState == 'error'" class="i-form-item-message">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../../mixins/emitter'
import AsyncValidator from 'async-validator'

export default {
  name: 'iFormItem',
  mixins: [emitter],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: String
  },
  data() {
    return {
      isRequired: false,
      validateState: '',
      validateMessage: ''
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)
      this.initialVal = this.fieldValue
      this.setRules()
    }
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop]
    }
  },
  methods: {
    setRules() {
      let rules = this.getRules()
      if (rules.length) {
        rules.some(rule => (this.isRequired = rule.required))
      }
      this.$on('on-form-blur', this.onFieldBlur)
      this.$on('on-form-change', this.onFieldChange)
    },
    getRules() {
      const formRules = this.form.rules

      return formRules ? formRules[this.prop] : []
    },
    getFilteredRule(trigger) {
      const rules = this.getRules()
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) != -1
      )
    },
    validate(trigger, callback = function() {}) {
      let rules = this.getFilteredRule(trigger)
      if (!rules || rules.length == 0) return true
      this.validateState = 'validating'
      let descriptor = {}
      descriptor[this.prop] = rules
      const validator = new AsyncValidator(descriptor)
      let model = {}
      model[this.prop] = this.fieldValue
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = errors ? 'error' : 'success'
        this.validateMessage = errors ? errors[0] : ''
        callback(this.validateMessage)
      })
    },
    resetField() {
      this.validateState = ''
      this.validateMessage = ''
      this.form.model[this.prop] = this.initialVal
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      this.validate('change')
    }
  },
  beforeDestory() {
    this.dispatch('iForm', 'on-form-item-remove', this)
  }
}
</script>

<style>
.i-form-item-label-required::before {
  content: '*';
  color: red;
}
.i-form-item-message {
  color: red;
}
</style>
