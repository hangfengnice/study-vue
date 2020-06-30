<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column type="index" width="55" label="序号" fixed />
    <el-table-column prop="tid" label="工具编号" />
    <el-table-column prop="tname" label="工具名称" />
    <el-table-column prop="tdesc" label="工具描述" />
    <el-table-column prop="tparam" label="工具参数" />
    <el-table-column prop="ssys" label="来源系统" />
    <el-table-column prop="tsys" label="目标系统" />
    <el-table-column prop="bmodule" label="业务模块" />
    <el-table-column prop="version" label="当前版本号" />
    <el-table-column prop="state" label="版本状态" />
    <el-table-column prop="vop" label="版本发布人" />
    <el-table-column prop="time" label="发布时间" />
    <el-table-column label="操作" width='160' fixed='right'>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          tid: 2020,
          tname: 'tname1',
          tdesc: 'some desc',
          tparam: '工具参数',
          ssys: 'SMC',
          tsys: 'SCM',
          bmodule: 'bussiness',
          version: '1.0.0',
          state: '有效',
          vop: '王小二',
          time: new Date().toLocaleDateString()
        },
        {
          tid: 2021,
          tname: 'tname1',
          tdesc: 'some desc',
          tparam: '工具参数',
          ssys: 'SMC',
          tsys: 'SCM',
          bmodule: 'bussiness',
          version: '1.0.0',
          state: '有效',
          vop: '王小二',
          time: new Date().toLocaleDateString()
        },
        {
          tid: 2022,
          tname: 'tname1',
          tdesc: 'some desc',
          tparam: '工具参数',
          ssys: 'SMC',
          tsys: 'SCM',
          bmodule: 'bussiness',
          version: '1.0.0',
          state: '有效',
          vop: '王小二',
          time: new Date().toLocaleDateString()
        }
      ],
      multipleSelection: []
    }
  },

  methods: {
    handleClick(row) {
      console.log(row)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
