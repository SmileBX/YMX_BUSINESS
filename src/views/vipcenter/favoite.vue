<template>
  <div class="favoite">
      <div class=" title text_left flex">
        <div class="color_red font18 font_bold ">Favorites</div>
        <div class="flex flexAlignCenter">
          <el-dropdown class="elem_drop">
            <span class="el-dropdown-link">
              All<i class="el-icon-caret-bottom
              "></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="clear_btn">Clear All Expire</div>
        </div>
      </div>
      <!--分类列表-->
      <proItem ></proItem>
      <div class="block mt5">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="5"
          layout="prev, pager, next, jumper"
          :total="12">
        </el-pagination>
      </div>
           
            
  </div>
</template>
<script>
  import proItem from '../../components/proitem.vue';
  export default{
      data(){
          return{
            radio: 3,
            currentPage3: 1,
          }
      },
      components:{
        proItem,
      },
      methods:{
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      }
  }
</script>
<style lang="less">
@import url("../../assets/css/mine.less");
.el-radio__input.is-checked .el-radio__inner{
    border-color:  #FD6A6C!important;
    background-color:  #FD6A6C!important;
  }
  .el-radio__input.is-checked+.el-radio__label{
    color: #FD6A6C;
  }
</style>