<template>
  <div class="index">
    <Ainput @input="handleInput" />
    <p>{{inputValue}}</p>

    <Ashow :content="inputValue" />

    <p>handsome: {{authorName}}</p>
    <p>userName: {{userName}}</p>
  </div>
</template>

<script>
import Ainput from "../components/Ainput";
import Ashow from "../components/Ashow";
import {mapState} from 'vuex'

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
  computed: {
    ...mapState({
      authorName: state => state.authorName,
      userName: state => state.user.userName,

    })
    // authorName() {
    //   return this.$store.state.authorName;
    // },
    // userName(){
    //   return this.$store.state.user.userName
    // }
  },
  methods: {
    handleInput(val) {
      this.inputValue = val;
    }
  }
};
</script>

<style lang='scss' scoped>
</style>