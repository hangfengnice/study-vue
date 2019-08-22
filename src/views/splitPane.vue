<template>
  <div class='split-pane-con'>
    <!-- <split-pane v-model='offSet'></split-pane> -->
    <split-pane :value.sync='offSet'>
      <div slot='left'>left</div>
      <div slot='right'>right</div>
    </split-pane>

  </div>
</template>

<script>
import SplitPane from "../components/split-pane/split-pane";

export default {
  name: "splitpane",
  components: {
    SplitPane
  },
  data() {
    return {
      offSet: 0.8
    }
  },
  // methods: {
  //   handleInput(value) {
  //     this.offSet = value
  //   }
  // }
};
</script>

<style lang='scss' scoped>
.split-pane-con{
  width: 400px;
  height: 200px;
  background-color: papayawhip;
}
</style>