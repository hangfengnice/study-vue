<template>
  <div class="home">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout class="main">
        <a-layout-content>Content</a-layout-content>
        <a-layout-sider>Sider</a-layout-sider>
      </a-layout>
    </a-layout>
    <my-table></my-table>
  </div>
</template>
<script>
import MyTable from './table'
export default {
  data() {
    return {
      collapsed: false
    }
  },
  components: {
    MyTable
  }
}
</script>
<style scoped>
.home {
  min-height: 100vh;
}
</style>
