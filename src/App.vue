<template>
  <div id="app">
    <Header-nav></Header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
       
      }
  },
  mounted () {
    
  },
  methods:{
      
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
</style>
