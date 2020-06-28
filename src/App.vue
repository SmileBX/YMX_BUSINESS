<template>
  <div id="app">
    <Header-nav v-if="header_show"></Header-nav>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" v-on:header="header"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" v-on:header="header"></router-view> -->
    <router-view v-on:header="header"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
        header_show:true,
    }
  },
  mounted () {
    
  },
  methods:{
      //是否显示头部
      header(bool) {
        this.header_show = bool;
      },
  }
}
</script>

<style lang="less">
  @import url("./assets/css/media.less");
  @import url("./assets/css/common.less");

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:0.16rem;
}
.el-icon-arrow-left:before {
    content: "Previous";
}
.el-icon-arrow-right:before {
    content: "Next";
}
.el-pager li.active{
  color:#FB7A6A;
  font-weight:bold;
  border-bottom:0.02rem solid #FB7A6A;
}
.el-pager li:hover{
  color:#FB7A6A;
}
.el-button:active {
  color: #FF5E6D;
  border-color: #FF5E6D;
  outline: 0;
}
.el-button:focus, .el-button:hover {
    color: #FF5E6D;
    border-color: #DBDBDB;
    background-color: #ffffff;
}
</style>
