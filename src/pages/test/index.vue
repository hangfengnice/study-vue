<template>
  <div class="test" ref="div">
      {{message}}
      
    <div><button @click="handleClick" ref='btn'>{{message}}</button></div>

  </div>
  
</template>
    <script>
export default {
  data() {
    return {
      message: "hello",
      a: 1,
      arr: [1, 2, 3],
      obj: {
        a: 1,
        b: 2
      }
    };
  },
  created() {
    // this.arr[0] = 'hahah'
  },
  beforeMount() {},
  mounted() {},
  methods: {
    handleClick() {
      // this.message =
      this.arr.push(4);

    //   console.log(this.arr.length.);
      this.message = 'word'
      console.log(this.$refs.btn.textContent)
      this.$nextTick().then(() => {
          console.log(this.$refs.btn.textContent)
      })
      // const userId = '123'
      // // this.$router.push({ name: 'login', params: { userId }}) // -> /user/123
      // this.$router.push({ path: `/login/${userId}` }) // -> /user/123
      // // // 这里的 params 不生效
      // // this.$router.push({ path: '/login', params: { userId }}) // -> /user

      //     // {
      //     //     path: "/login",
      //     //     name: "login",
      //     //     component: Login
      //     //   },
    }
  }
};
</script>
    <style scoped>
/* .test{
       background:blue;
        height:100px;
        width:100px;
    }
    .testAdd{
        background:red;
        height:100px;
        width:100px;
    } */
</style>

