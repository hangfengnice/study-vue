<template>
  <el-dialog :visible.sync="visibleDialog"
 >
    <slot></slot>
    <template #footer>
      <slot name="footer">
        <span>
          <el-button @click="$_handleCancel">取 消</el-button>
          <el-button type="primary" @click="$_handleConfirm">确定</el-button>
        </span>
      </slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  inject: {
    app: {
      from: 'app'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    visibleDialog: {
      get() {
        return this.visible
      },
      set() {
        this.$emit('update:visible')
      }
    }
  },
  methods: {
    $_handleCancel() {
      this.$emit('cancel')
    },
    $_handleConfirm() {
      this.$emit('confirm')
    }
  }
}
</script>

<style></style>
