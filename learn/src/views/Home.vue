<template>
  <div class="home">
    <test></test>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import YButton from "@/components/y-button.vue";
import HfButton from '@/components/hf-button.vue'
import Test from './test'
import emitter from '@/utils/emitter.js'

export default {
  mixins: [emitter],
  name: "Home",
  components: {
    HelloWorld,
    YButton,
    HfButton,
    Test
  },
  data() {
    return {
      name: 'hf11'
    }
  },
  provide() {
    return {
      name: this.name,
      reactivename: () => this.name
    }
  },
  methods: {
    changeProvideName() {
      this.name = 'hh'
      console.log(this.name, 'change this.name')
    }
  }
};
</script>
<style scoped>
.blue {
  color: blue;
}
</style>
