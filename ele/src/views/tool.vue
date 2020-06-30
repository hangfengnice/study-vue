<template>
  <div>
    <el-form :inline="true" v-model="form">
      <div>
        <img src="" alt="" />
        <h3>基本信息</h3>
      </div>
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
      <el-form-item label="业务模块">
        <el-select v-model="form.bmodule" placeholder="业务模块">
          <el-option label="业务模块一" value="shanghai"></el-option>
          <el-option label="业务模块二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工具名称">
        <el-input v-model="form.name" placeholder="工具名称"></el-input>
      </el-form-item>
      <el-form-item label="来源系统">
        <el-select v-model="form.ssys" placeholder="来源系统">
          <el-option label="来源系统一" value="shanghai"></el-option>
          <el-option label="来源系统二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="目标系统">
        <el-select v-model="form.tsys" placeholder="目标系统">
          <el-option label="目标系统一" value="shanghai"></el-option>
          <el-option label="目标系统二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工具描述">
        <el-input v-model="form.tdesc" placeholder="工具描述"></el-input>
      </el-form-item>

      <div>
        <img src="" alt="" />
        <h3>执行参数</h3>
      </div>
      <el-form-item label="订单编号">
        <el-input v-model="form.tid" placeholder="订单编号"></el-input>
      </el-form-item>
      <el-form-item label="订单行号">
        <el-input v-model="form.tid" placeholder="订单行号"></el-input>
      </el-form-item>
      <el-form-item label="订单单价">
        <el-input v-model="form.tid" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="执行时间">
        <el-input v-model="form.tid" placeholder="订单编号"></el-input>
      </el-form-item>
      <el-form-item label="执行周期">
        <el-input v-model="form.tid" placeholder="订单编号"></el-input>
      </el-form-item>

      <div>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tid: '',
        type: '',
        version: '',
        bmodule: '',
        name: '',
        ssys: '',
        tsys: '',
        tdesc: ''
      }
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style></style>
