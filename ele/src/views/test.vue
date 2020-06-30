<template>
  <div>
    <child-a :visible.sync="visibleDialog"
      @opened="$_handleOpened"
      @confirm="$_handleConfirm"
      @cancel="$_handleCancel"
      >
       这是一段内容
      </child-a>
    <el-button @click.native="handleBtnClick">改变</el-button>

  </div>
</template>

<script>
import ChildA from './child-a'

export default {
  provide() {
    return {
      app: this
    }
  },
  data() {
    return {
      name: 'hf',
      visibleDialog: false
    }
  },
  methods: {
    handleBtnClick() {
      this.visibleDialog = true
    },
    $_handleConfirm() {
      this.visibleDialog = false
    },
    $_handleCancel() {
      this.visibleDialog = false
    },
    $_handleOpened() {
      console.log('open')
    }
  },
  components: {
    ChildA
  }
}
</script>

<style></style>
