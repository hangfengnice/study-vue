<template>
  <div>
    <slot name='left'></slot><span ref='number' :class='countClass' :id='eleId'></span><slot name='right'></slot>
  </div>
</template>

<script>
import CountUp from "countup";
import { setTimeout } from 'timers';

export default {
  name: "countTo",
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass() {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data() {
    return {
      counter: {}
    }
  },
  props: {
    startVal: {
      type: Number, 
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 1
    },
    duration: {
      type:Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ","
    },
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ""
    }
  },
  methods: {
    getCount() {
      return this.$refs.number.innerText
    },
    emitEndEvent() {
      setTimeout(() => {
        this.$emit('on-animation-end', Number(this.getCount()))
      }, this.duration * 1000 + 5)
    }
  },
  watch: {
    endVal(newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted() {
    this.$nextTick(() => {
     this.counter =  new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
       useEasing: this.useEasing,
       useGrouping: this.useGrouping,
       separator: this.separator,
       decimal: this.decimal
     })
     setTimeout(() => {
       this.counter.start()
       this.emitEndEvent()
     }, this.delay)
    })
  }
};
</script>

<style lang='scss' scoped>
@import './countTo.scss';
</style>

