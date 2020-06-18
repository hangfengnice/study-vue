<template>
  <button :disabled='disabled' @click="handleYButtonClick">
    <slot></slot>
    <slot name="hf"></slot>
    {{this.name}}--{{reactivename()}}

  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: ['name', 'reactivename'],
  inheritAttrs: false,
  methods: {
    say() {
      console.log('say')
    },
    handleYButtonClick() {
      console.log('click')
      this.$emit('test' ,'helo')
    }
  },
  computed: {
  },
  mounted() {
    this.$on('test', val => {
      console.log(val)
    })
  }
}
</script>

<style>

</style>
