<template>
  <div>
    <div>
      <button @click="handleOpen1">打开提示1</button>
    </div>
    <div>
      <button @click="handleOpen2">打开提示2</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen1() {
      this.$Alert.info({
        content: '我是提示1'
      })
    },
    handleOpen2() {
      this.$Alert.info({
        content: '我是提示2'
      })
    }
  }
}
</script>

<style></style>
