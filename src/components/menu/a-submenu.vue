<template>
<ul class='a-submenu'>
  <div class='title' @click='handleClick'>
    <slot name='title'></slot>
    <span class='shrink-icon' :style="{transform: `rotateZ(${showChild ? 0 : 180}deg)`}">^</span>
    </div>
  <div v-show='showChild' class='child-box'>
    <slot></slot>
  </div>
</ul>
</template>

<script> 
export default {
name:"asubmenu",
data() {
  return {
    showChild: false
  }
},
methods: {
  handleClick() {
    this.showChild = !this.showChild
  }
}
}
</script>

<style lang='scss' scoped>
.a-submenu{
  margin: 0;
  .title {
    background-color: rgb(170, 247, 170);
    position: relative;
    .shrink-icon{
      position: absolute;
      top: 2px;
      right: 10px;
    }
  }
  .child-box{ 
    overflow: hidden;
  }
  
}
</style>