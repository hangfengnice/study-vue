<template>
  <div>
    <div>申请详情</div>
    <el-form action="" v-model="form" :inline="true">
      <el-form-item label="公司名称">
        <el-input v-model="form.cname" placeholder="公司名称"></el-input>
      </el-form-item>
      <el-form-item label="组织部门">
        <el-input v-model="form.depart" placeholder="组织部门"></el-input>
      </el-form-item>
      <el-form-item label="申请人">
        <el-input v-model="form.applicant" placeholder="申请人"></el-input>
      </el-form-item>
      <el-form-item label="申请日期">
        <el-input v-model="form.time" placeholder="申请日期"></el-input>
      </el-form-item>
      <el-form-item label="单据名称">
        <el-input v-model="form.docname" placeholder="单据名称"></el-input>
      </el-form-item>
      <el-form-item label="单据编号">
        <el-input v-model="form.docid" placeholder="单据编号"></el-input>
      </el-form-item>
      <el-form-item label="单据状态">
        <el-input v-model="form.docstate" placeholder="单据状态"></el-input>
      </el-form-item>

      <div>工具详情</div>
      <div>
        <el-form-item label="工具编号">
          <el-input v-model="form.tid" placeholder="工具编号"></el-input>
        </el-form-item>
        <el-form-item label="工具类型">
          <el-select v-model="form.type" placeholder="工具类型">
            <el-option label="类型一" value="shanghai"></el-option>
            <el-option label="类型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="版本号">
          <el-input v-model="form.version" placeholder="版本号"></el-input>
        </el-form-item>
        <el-form-item label="业务域">
          <el-select v-model="form.type" placeholder="业务域">
            <el-option label="业务域一" value="shanghai"></el-option>
            <el-option label="业务域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="操作对象">
          <el-select v-model="form.type" placeholder="操作对象">
            <el-option label="操作对象一" value="shanghai"></el-option>
            <el-option label="操作对象二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="操作数据库">
          <el-select v-model="form.type" placeholder="操作数据库">
            <el-option label="操作数据库一" value="shanghai"></el-option>
            <el-option label="操作数据库二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="工具名称">
          <el-input v-model="form.version" placeholder="工具名称"></el-input>
        </el-form-item>

        <el-form-item label="结果类型">
          <el-select v-model="form.type" placeholder="结果类型">
            <el-option label="结果类型一" value="shanghai"></el-option>
            <el-option label="结果类型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="工具详情">
          <el-input v-model="form.version" placeholder="工具详情"></el-input>
        </el-form-item>

        <div></div>
        <el-form-item label="参数实体">
          <el-table>
            <el-table-column label='参数名称' />
            <el-table-column  width="55" label="参数类型" />
            <el-table-column prop="tid" label="备注说明" />
          </el-table>
        </el-form-item>

        <div>
          <el-button>保存</el-button>
          <el-button>删除</el-button>
          <el-button>提交</el-button>
          <el-button>关闭</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        cname: '',
        depart: '',
        applicant: '',
        time: '',
        docname: '',
        docid: '',
        docstate: ''
      }
    }
  }
}
</script>

<style></style>
