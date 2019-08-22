<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-submenu>
        <div slot='title'>333 </div>
        <a-menu-item>333-11</a-menu-item>
        <a-submenu>
          <div slot='title'>333-22 </div>
          <a-menu-item>333-22-11</a-menu-item>
          <a-menu-item>333-22-22</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key='index'>{{item.title}}</a-menu-item>
        <re-submenu v-else :key='index' :parent='item'></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import {
  AMenu,
  AMenuItem,
  ASubmenu } from "../components/menu";
import ReSubmenu from '../views/re-submenu'

export default {
  name: "menuPage",
  components: {
    AMenu,
    AMenuItem,
    ASubmenu,
    ReSubmenu
  },
  data() {
    return {
      list: [
        {
          title: "111"
        },
        {
          title: "222"
        },
        {
          title: "333",
          children: [
            {
              title: "333-1"
            },
            {
              title: "333-2",
              children: [
                {
                  title: '333-2-1'
                },
                {
                  title: '333-2-2'
                },
              ]
            }
          ]
        }
      ]
    }
  }
};
</script>

<style lang='scss' scoped>
.menu-box{
  width: 300px;
  height: 400px;
}
</style>