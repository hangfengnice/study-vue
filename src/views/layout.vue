<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider :width='300' collapsible hide-trigger breakpoint='sm' v-model="collapsed">
        <side-menu :collapsed="collapsed" :list='menuList'></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon  :class='triggerClasses'  @click.native="handleCollapsed" type="md-menu" :size="32" />
        </Header>
        <Content class='content-con'>
          <Card shadow class='page-card'>
            <router-view></router-view>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from '../components/side-menu/side-menu'

export default {
  name: "layout",
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: true,
      menuList: [
        {
          title: '1',
          name: "menu1",
          icon: 'ios-alarm'
        },
        {
          name: "menu2",
          title: '1',
          icon: 'ios-alarm'
        },
        {
          title: '1',
          name: "menu3",
          icon: 'ios-alarm',
          children: [
            {
              title: "1-1",
              name: "menu31",
              icon: 'ios-alarm'
            },
            {
              title: "1-2",
              name: "menu32",
              icon: 'ios-alarm',
              children: [
                {
                  title: "1-2-1",
                  name: "menu321",
                  icon: 'ios-alarm'
                },
                {
                  title: "1-2-2",
                  name: "menu322",
                  icon: 'ios-alarm'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    triggerClasses() {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ""
      ]
    }
  },
  methods: {
    handleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style lang='scss' scoped>
.layout-wrapper {
  height: 100%;
}
.layout-outer {
  height: 100%;
  .header-wrapper {
    background-color: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 24px;
    .trigger-icon {
      cursor: pointer;
      transition: transform .3s ease;
    }
    .rotate {
        transform: rotateZ(-90deg);
        transition: transform .3s ease;
      }
  }
  .content-con{
    padding: 10px;
  }
  .page-card{
    min-height: calc(100vh - 84px);
  }
}
</style>