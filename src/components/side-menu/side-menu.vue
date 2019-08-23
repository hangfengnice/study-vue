<template>
  <div class='side-menu-wrapper'>
    <slot></slot>
    <Menu v-show="!collapsed" width='auto' theme='dark' @on-select='handleSelect' >
      <template v-for="item in list">
        <re-submenu
        v-if="item.children"
        :key='item.name'
        :parent='item'
        :name='item.name'></re-submenu>
        <menu-item v-else :key="item.name" :name='item.name'>
        <Icon :type='item.icon' />
        {{item.title}}</menu-item>
      </template>
    </Menu>

    <div v-show='collapsed' class='drop-wrapper'>
      <template v-for="item in list">
        <re-dropdown @on-select='handleSelect' v-if="item.children" :show-title='false' icon-color='#fff' :key='item.name' :parent='item'></re-dropdown>
        <Tooltip v-else transfer :content="item.title" placement='right' :key="item.name">
          <span @click='handleClick(item.name)' class="drop-menu-span">
            <Icon :type='item.icon' color="#fff" :size='20' ></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ReSubmenu from './re-submenu'
import ReDropdown from './re-dropdown'

 export default {
   name: "SideMenu",
   components: {
     ReSubmenu,
     ReDropdown
   },
   props: {
     collapsed: {
       type: Boolean,
       default: false
     },
     list: {
       type: Array,
       default: () => []
     },
     
   },
   data() {
     return {
             
      }
   },
   methods: {
     handleSelect(name) {
       console.log(name)
     },
     handleClick(name) {
       console.log(name)
     }
   }
 }
</script>

<style lang='scss' scoped>
  .side-menu-wrapper{
    width: 100%;
    .ivu-tooltip, .drop-menu-span{
      width: 100%;
      display: block;
      text-align: center;
      padding: 5px 0;
    }
    .drop-wrapper > .ivu-dropdown{
      display: block;
      padding: 5px;
      text-align: center;
    }
  }
</style>