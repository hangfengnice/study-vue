<template>
  <div class='split-pane-con'>
    hello
    <split-pane></split-pane>
  </div>
</template>

<script>
// import SplitPane from "../components/split-pane/split-pane";
import SplitPane from '../components/split-pane/hello.vue'

export default {
  name: "splitPane",
  components: {
    SplitPane
  }
};
</script>

<style lang='scss' scoped>
.split-pane-con{
  width: 400px;
  height: 300px;
  background-color: papayawhip;
}
</style>