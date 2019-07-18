<template>
<dir>
  <p>Ashow: {{content}}</p>

</dir>
</template>

<script>
export default {
name:"Ashow",
props: {
  content: {
    type: [String,Number],
    default: ''
  }
},
// methods: {
//   handleInput(e){
//     const value = e.target.value
//     this.$emit('input',value)
//   }
// }
}
</script>

<style lang='scss' scoped>

</style>