<template>
  <div class="home">
    <m-head></m-head>
    <div class="bg">
      <div class="box">
        <div class="routes">
          <span class="route">
            <i class="el-icon-s-home"></i>
            返回主页
          </span>
          <span class="route">运维工具</span>
        </div>
        <el-container class="swiper">
          <img class="banner" src="../assets/banner.png" alt="" />
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
      </div>
      <div class="box tables">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部工具" name="first">
            <div class="all-tool" v-for="item in 4" :key="item">
              <img src="../assets/avatar.jpeg" alt="" class="tool-i">
              <div class="tool-content">
                <div class="tool-h">
                  <div>
                    <span class="tool-type">采购</span>
                    <span class="tool-desc">更新采购订单不含税单价</span>
                  </div>
                  <div>
                    <span class="btn"><i class="el-icon-finished"></i> 执行</span>
                    <span class="btn"><i class="el-icon-star-on"></i> 收藏</span>
                  </div>
                </div>
                <div class="tool-m c666">
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
    </div>
    <my-table></my-table>
    <my-form></my-form>
    <my-apply></my-apply>
  </div>
</template>

<script>
// @ is an alias to /src
import MyTable from './table'
import MyForm from './tool'
import MyApply from './apply'
import MHead from '../components/home/m-head'

export default {
  name: 'Home',
  components: {
    MHead,
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
.routes {
  padding: 10px 0;
}
.route {
  font-size: 12px;
}
.route + .route {
  margin-left: 28px;
}
.route:last-child {
  color: #26a3f5;
}
.swiper {
  display: flex;
  justify-content: space-between;
}
.banner {
  flex: 1;
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
    word-break: keep-all;
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

.tables {
  background: #ddd;
  margin-top: 10px;
  padding: 0 10px 20px;
}
/deep/ .el-tabs__nav-wrap::after {
  background-color: #d0d0d0;
}
/deep/ .el-tabs__active-bar {
  width: 44px !important;
  left: 6px;
  height: 3px;
  bottom: 1px;
}
.all-tool {
  background-color: #f0f0f0;
  margin-bottom: 1px;
  display: flex;
  padding: 14px 10px;
  .tool-i {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    align-self: flex-start;
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
    box-sizing: border-box;
    font-size: 12px;
  }
  .tool-desc {
    font-size: 16px;
  }
  .btn {
    color: #999;
  }
  .btn + .btn {
    margin-left: 20px;
  }
  .btn:hover {
    color: #eb3223;
  }
  .btn:first-child:hover {
    color: #26a3f5;
  }
  .tool-m {
    line-height: 1.8;
    margin-top: 3px;
  }
  .tags {
    font-size: 12px;
    color: #999;
    margin-top: 2px;
  }
  .tag + .tag {
    margin-left: 54px;
  }
}
</style>
