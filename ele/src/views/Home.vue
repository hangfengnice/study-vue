<template>
  <div class="home">
    <el-container>
      <el-header>header</el-header>
      <div>
        {{ result }}
      </div>
      <el-container>
        <el-main>Main</el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
    </el-container>
    <my-table></my-table>
    <my-form></my-form>
    <my-apply></my-apply>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash'
import MyTable from './table'
import MyForm from './tool'
import MyApply from './apply'

export default {
  name: 'Home',
  components: {
    MyTable,
    MyForm,
    MyApply
  },
  data() {
    return {
      str:
        'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
    }
  },
  computed: {
    result() {
      const words = this.str.toLowerCase().match(/\w+/g)
      const tuples = words.map(word => [word, 1])
      const wordCountResult = _.reduceByKey(tuples, (left, right) => left + right)
      console.log(wordCountResult)
      return 'hello'
    }
  }
}
</script>
<style scoped lang="scss">
/deep/ .el-main {
  border: 1px solid #eee;
}
</style>
