<template>
<li class='a-menu-item'><slot></slot></li>
</template>

<script>
export default {
name:"amenuItem"
}
</script>

<style lang='scss' scoped>
.a-menu-item{
  background-color: rgb(169, 233, 241);
}
</style>