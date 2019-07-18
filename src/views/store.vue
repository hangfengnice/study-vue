<template>
  <div class="index">
    <Ainput @input = 'handleInput'/>
    <p>{{inputValue}}</p>

    <Ashow :content='inputValue' />
    
  </div>
</template>

<script>
import Ainput from "../components/Ainput";
import Ashow from "../components/Ashow";


export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    Ainput,
    Ashow
  },
  methods: {
    handleInput(val){
      this.inputValue = val
    }
  }
};
</script>

<style lang='scss' scoped>
</style>