<template>
  <div class="home">
    <el-container>
      <el-header class="head">
        <div class="head-l">
          <img class="logo" src="../assets/logo.png" alt="" />
          <!-- <img class="logo-i" src="" alt="" /> -->
          <h3 class="title">运维支撑管理平台</h3>
        </div>
        <el-input
          class="input"
          v-model="input"
          prefix-icon="el-icon-search"
          clearable
          placeholder="搜索"
        ></el-input>
        <div class="head-r">
          <img class="avatar" src="../assets/avatar.jpeg" alt="" />
          <i class="el-icon-message-solid icons"></i>
          <i class="el-icon-delete icons"></i>
          <el-dropdown class="icons">
            <span >
              <i class="el-icon-s-tools "></i>

              <i class="el-icon-caret-bottom "></i>
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
      </el-header>
      <div>
        <el-button>放回主页</el-button>
        <span>运维工具</span>
      </div>
      <el-container class="swiper">
        <el-main>Main</el-main>
        <el-aside width="200px" class="aside">
          <div class="panel">
            <h3>系统公告</h3>
            <ul>
              <li class="notice-li" v-for="item in 4" :key="item">
                加工费文化空间的三拜九叩说的不错
              </li>
            </ul>
          </div>

          <div class="panel">
            <h3>运营通知</h3>
            <ul>
              <li class="notice-li" v-for="item in 4" :key="item">
                加工费文化空间的三拜九叩说的不错
              </li>
            </ul>
          </div>
        </el-aside>
      </el-container>

      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部工具" name="first">
            <div class="all-tool">
              <img
                class="tool-i"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgOTggMTUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8dGl0bGU+ZHVvaHVpLWVsZW1lbnQ8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIxNiAxNDApIj4KPGNsaXBQYXRoIGlkPSJjbGlwLTAiIGNsaXAtcnVsZT0iZXZlbm9kZCI+CjxwYXRoIGQ9Ik0gMjIxNiAtMTQwTCAyMzE0IC0xNDBMIDIzMTQgMTBMIDIyMTYgMTBMIDIyMTYgLTE0MFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9jbGlwUGF0aD4KPGcgaWQ9ImR1b2h1aS1lbGVtZW50IiBjbGlwLXBhdGg9InVybCgjY2xpcC0wKSI+CjxwYXRoIGQ9Ik0gMjIxNiAtMTQwTCAyMzE0IC0xNDBMIDIzMTQgMTBMIDIyMTYgMTBMIDIyMTYgLTE0MFoiIGZpbGw9IiNGRkZGRkYiLz4KPGcgaWQ9IkR1b2h1aSBJY29uIDIiPgo8ZyBpZD0iVmVjdG9yIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNjYzNiAwIDAgMS4yMTkyOSAyMjMwIC03NS43MDM4KSIgZmlsbD0iIzNBODhGRCIvPgo8L2c+CjxnIGlkPSJWZWN0b3IiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMV9maWxsIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQxNTM0IDAgMCAxLjIxODM0IDIyMjYgLTExMikiIGZpbGw9IiMzNUFGRkIiLz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPHBhdGggaWQ9InBhdGgwX2ZpbGwiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTSAyNS43NzIyIDEuMDA2MzVDIDI2LjIgMC4zNzQ5ODMgMjYuODk0OSAtMi42NjEzZS0wNyAyNy42MzQ5IC0yLjY2MTNlLTA3QyAyOC4zNzU1IC0yLjY2MTNlLTA3IDI5LjA2OTkgMC4zNzQ5ODMgMjkuNDk4MyAxLjAwNjM1QyAzNC40MDkgOC4yNDk2NCA0Ny43OTggMjcuOTk2NCA1NC41OTg2IDM4LjAyNjJDIDU1LjM4NzggMzkuMTkwMSA1NS40ODk2IDQwLjcxNjIgNTQuODYyMyA0MS45ODNDIDU0LjIzNSA0My4yNDk4IDUyLjk4MzMgNDQuMDQ1MiA1MS42MTc4IDQ0LjA0NTJDIDM5LjY2OTQgNDQuMDQ1MiAxNS42MDEgNDQuMDQ1MiAzLjY1MjEgNDQuMDQ1MkMgMi4yODcxMiA0NC4wNDUyIDEuMDM1NDUgNDMuMjQ5OCAwLjQwODE3MyA0MS45ODNDIC0wLjIxOTEwNiA0MC43MTYyIC0wLjExNzM1MyAzOS4xOTAxIDAuNjcxODA0IDM4LjAyNjJDIDcuNDcyNDIgMjcuOTk2NCAyMC44NjA5IDguMjQ5NjQgMjUuNzcyMiAxLjAwNjM1WiIvPgo8cGF0aCBpZD0icGF0aDFfZmlsbCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNIDI0Ljk5MzkgMS40NDcwM0MgMjUuNjEzNyAwLjUzMzExNyAyNi41NTcyIC0zLjAxNjE0ZS0wNyAyNy41NTUxIC0zLjAxNjE0ZS0wN0MgMjguNTUzNSAtMy4wMTYxNGUtMDcgMjkuNDk3IDAuNTMzMTE3IDMwLjExNjggMS40NDcwM0MgMzUuNDY3NCA5LjMzODU0IDQ3Ljg3MjUgMjcuNjM0MiA1NC40MDQzIDM3LjI2ODFDIDU1LjE4MjUgMzguNDE1NyA1NS4zMjk5IDM5Ljk4MiA1NC43ODQ3IDQxLjI5OTlDIDU0LjIzODkgNDIuNjE4NSA1My4wOTYgNDMuNDU1NiA1MS44NDI2IDQzLjQ1NTZDIDM5LjkwMjMgNDMuNDU1NiAxNS4yMDg0IDQzLjQ1NTYgMy4yNjgxMSA0My40NTU2QyAyLjAxNDcxIDQzLjQ1NTYgMC44NzE3MzkgNDIuNjE4NSAwLjMyNTk3OCA0MS4yOTk5QyAtMC4yMTk3ODMgMzkuOTgyIC0wLjA3MTc4MTMgMzguNDE1NyAwLjcwNjM5IDM3LjI2ODFDIDcuMjM4MTggMjcuNjM0MiAxOS42NDMzIDkuMzM4NTQgMjQuOTkzOSAxLjQ0NzAzWiIvPgo8L2RlZnM+Cjwvc3ZnPgo="
                alt=""
              />
              <div class="tool-content">
                <div class="tool-h">
                  <div>
                    <span class="tool-type">采购</span>
                    <span>更新采购订单不含税单价</span>
                  </div>
                  <div>
                    <el-button>执行</el-button>
                    <el-button icon="el-icon-star-on">收藏</el-button>
                  </div>
                </div>
                <div class="tool-m">
                  <span>工具说明：</span>
                  <span>
                    通过提供订单编号及单价信息，可自动更新采购订单不含税、含税单价与金额及相关接收单单机信
                  </span>
                </div>
                <div class="tags">
                  <span class="tag">版本号：V1.0</span>
                  <span class="tag">最近一次执行状态：成功</span>
                  <span class="tag">最近一次执行时间：2020/06/07</span>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的收藏" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="我的任务" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </div>
    </el-container>
    <!-- <my-table></my-table>
    <my-form></my-form>
    <my-apply></my-apply> -->
  </div>
</template>

<script>
// @ is an alias to /src
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
      activeName: 'first',
      input: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped lang="scss">
/deep/ .el-main {
  border: 1px solid #eee;
}
.head {
  display: flex;
  align-items: center;
}
.head-l {
  display: flex;
}
.logo {
  width: 106px;
  height: 32px;
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
}
/deep/ .el-input__inner {
  border-radius: 16px;
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
}

.swiper {
  display: flex;
  justify-content: space-between;
}
.aside {
  flex: 1 1 252px;
  color: #fff;
  background: #3354d7;
  margin-left: 6px;
  padding: 10px;
  .panel {
    padding: 10px;
    background-color: #3e95f3;
  }
  .panel + .panel {
    margin-top: 6px;
  }
  .notice-li {
    font-size: 12px;
    line-height: 3;
    position: relative;
  }
  .notice-li::after {
    content: '';
    position: absolute;
    left: -16px;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      #fff,
      #fff 5px,
      transparent 5px,
      transparent
    );
    background-size: 10px 100%;
  }
}
.all-tool {
  display: flex;
  padding: 14px 10px;
  .tool-i {
    width: 70px;
    margin-right: 10px;
  }
  .tool-content {
    flex: 1;
  }
  .tool-h {
    display: flex;
    justify-content: space-between;
  }
  .tool-type {
    border: 1px solid currentColor;
    padding: 0 4px;
    margin-right: 10px;
  }
  .tool-m {
    line-height: 1.8;
  }
  .tag + .tag {
    margin-left: 54px;
  }
}
</style>
