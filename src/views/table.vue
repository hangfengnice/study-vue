<template>
  <div>
    <!-- <edit-table :columns='columns' v-model='tableData' @on-edit="handleEdit"></edit-table> -->
    <edit-table-mul :columns='columns' v-model='tableData'></edit-table-mul>
  </div>
</template>

<script>
import {getTableData} from '../api/data'
import EditTable from '../components/edit-table/edit-table'
import EditTableMul from '../components/edit-table-mul/edit-table-mul'

 export default {
   name: "",
   components: {
     EditTable,
     EditTableMul
   },
   props: {},
   data() {
     return {
       tableData: [],
       columns: [
         {key:"name", title: "姓名"},
         {key:"age", title: "年龄", editable: true},
         {key:"email", title: "邮箱", editable: true},
       ]
     }
   },
   mounted() {
     getTableData().then(res => {
       this.tableData = res.data
     })
   },
   methods: {
     handleEdit({row, index, column, newValue}) {
       console.log(row, index, column, newValue)
     }
   }
 }
</script>

<style lang='scss' scoped>
</style>