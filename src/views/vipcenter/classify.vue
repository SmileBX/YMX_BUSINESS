<template>
  <div>
      <div v-if="hasData" class="notice">
          <div class="text_left font_bold pp2 font18 color_red ">Deal Requested</div>
          <div>




            hahfhosahfoahfohsaoghaos
          </div>
              
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
      <div v-else class="font16 nodata font_bold">You have not received any notifications yet.</div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      currentPage3: 1,
      hasData:true
    }
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
}
</script>
<style lang="less">
 @import url("../../assets/css/mine.less");
 .notice{
    margin:0.3rem 0.2rem;
    background: #ffffff;
    padding-bottom:0.8rem;
    box-sizing: border-box;
  }
  .nodata{
    height:calc(100vh - 0.89rem - 0.6rem);
    box-sizing: border-box;
    padding-top:4rem;
  }
</style>