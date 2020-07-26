<template>
  <div class="head-g">
    <div class="head box">
    <div class="head-l">
      <img class="logo" src="@/assets/h-logo.png" alt="" />
      <!-- <img class="logo-i" src="" alt="" /> -->
      <!-- <h3 class="title">运维支撑管理平台</h3> -->
    </div>
    <el-input
      class="input"
      v-model="input"
      prefix-icon="el-icon-search"
      clearable
      placeholder="搜索"
    ></el-input>
    <div class="head-r">
      <img class="avatar" src="@/assets/avatar.jpeg" alt="" />
      <i class="el-icon-message-solid icons"></i>
      <i class="el-icon-chat-dot-square icons"></i>
      <el-dropdown class="icons">
        <span>
          <i class="el-icon-s-tools cf"></i>

          <i class="el-icon-caret-bottom cf"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="el-icon-chat-line-square icons"></i>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.head-g {
  background: url('../../assets/head-b.png');
}
.head {
  display: flex;
  align-items: center;
}
.head-l {
  display: flex;
}
.logo {
  // width: 106px;
  // height: 32px;
}
.title {
  font-size: 24px;
  color: #3485ca;
  margin-left: 10px;
}
.input {
  margin-left: auto;
  width: 300px;
}
/deep/ .el-input__inner,
/deep/ .el-input__icon,
/deep/ .el-input__suffix {
  height: 32px;
  line-height: 32px;
  color: #fff;
}
/deep/ .el-input__inner {
  border-radius: 16px;
  border-color: #fff;
  background-color: transparent;
}
/deep/ .el-input__inner:focus,
/deep/ .el-input__inner:hover {
  border-color: #fff;
}
/deep/ .el-input__inner::placeholder {
  color: #fff;
}
.head-r {
  display: flex;
  align-items: center;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 20px;
}
.icons {
  margin-left: 20px;
  color: #fff;
}
.el-icon-caret-bottom {
  font-size: 12px;
  margin-left: 2px;
  vertical-align: 1px;
}
</style>
