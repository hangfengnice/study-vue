<template>
  <div>
    <i-form ref='form' :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item>
        <i-checkbox></i-checkbox>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">reset</button>
  </div>
</template>

<script>
import iForm from '../components/form/form'
import iFormItem from '../components/form/form-item'
import iInput from '../components/input/input'
import iCheckbox from '../components/checkbox/checkbox'

export default {
  components: {
    iForm,
    iFormItem,
    iInput,
    iCheckbox
  },
  data() {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('success')
        } else {
          console.log('error')
        }
      })
    },
    handleReset() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style></style>
