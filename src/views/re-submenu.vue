<template>
<a-submenu>
  <div slot='title'>{{parent.title}}</div>
  <template v-for="(item, i) in parent.children">
    <a-menu-item v-if='!item.children' :key='i'>{{item.title}}</a-menu-item>
    <re-submenu v-else :key='i' :parent='item'></re-submenu>
  </template>
  
</a-submenu>
</template>

<script>
import {
  AMenuItem,
  ASubmenu } from "../components/menu";

export default {
name:"ReSubmenu",
components: {
  AMenuItem,
  ASubmenu 
},
props: {
  parent: {
    type: Object,
    default: () => {{}}
  }
}
}
</script>

<style lang='scss' scoped>

</style>