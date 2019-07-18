<template>
  <div>
    <!-- 138 5808 9629
     -->
     <p>{{message}}</p>
    </div>
</template>

<script>
export default {
  name: "telphone",
  data(){
    return {
      message: ""
    }
  },
  mounted(){
    this.$bus.$on('onClick', mes => {
      this.message = mes
    })
  }
};
</script>

<style lang='scss' scoped>
</style>