<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "aMenu"
};
</script>

<style lang='scss' scoped>
.a-menu *{
  list-style: none;
}
</style>