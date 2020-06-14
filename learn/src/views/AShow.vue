<template>
  <div>
    AShow: {{count}}
  </div>
</template>

<script>
export default {

  props: {
    count: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style>

</style>
