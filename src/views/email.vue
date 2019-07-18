<template>
  <!-- <div>nicehangfeng@foxmail.com</div> -->
  <div>
    <button @click='handleClick'>按我</button>
  </div>
</template>

<script>
export default {
  name: "email",
  methods: {
    handleClick(){
      this.$bus.$emit('onClick', 'hello')
    }
  },
  mounted(){
    console.log(this.$bus)
  }
};
</script>

<style lang='scss' scoped>
</style>