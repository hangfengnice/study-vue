<template>
  <div class="split_pane-wrapper" ref='outer'>
    <div class='pane pane-left' :style='{width: leftOffSetPercent, paddingRight: `${this.triggerWidth / 2}px`}'>
      <button @click='handleClick'>ssssss</button>
      <slot name='left'></slot>
    </div>
    <div class='pane-trigger-con' 
    @mousedown="handleMousedown"
    :style='{left: triggerLeft, width: `${triggerWidth}px`}'></div>
    <div class='pane pane-right' :style='{left: leftOffSetPercent, paddingLeft: `${this.triggerWidth / 2}px`}'>
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitPane",
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffSetPercent() {
      return `${this.value * 100}%`
    },
    triggerLeft(){
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px`
    }
  },
  methods: {
    handleClick() {
      let value1 = this.value - 0.02
      this.$emit('update:value', value1)
    },
    handleMousedown(event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMousemove(event) {
      if(!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2  -  outerRect.left) / outerRect.width
      if(offsetPercent < this.min) {
        offsetPercent = this.min
      } else if (offsetPercent > this.max){
        offsetPercent = this.max
      }
      // this.$emit('input', offsetPercent)
      this.$emit('update:value', offsetPercent)

    },
    handleMouseup() {
      this.canMove = false
    }
  }
};
</script>

<style lang='scss' scoped>
.split_pane-wrapper{
  height: 100%;
  width: 100%;
  position: relative;
  .pane{
    position: absolute;
    top: 0;
    height: 100%;
    &-left{
      background-color: palevioletred;
    }
    &-right{
      right: 0;
      bottom: 0;
      background-color: paleturquoise;
    }
    &-trigger-con{
      height: 100%;
      background-color: #f00;
      position: absolute;
      top: 0;
      z-index: 1;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>