<template>
  <div>
      <div v-if="hasData" class="requset">
          <div class="text_left font_bold pp2 font18 color_red ">Deal Requested</div>
          <div class="quset_list mt3">
              <div class="quest_item flex justifyContentBetween flexAlignCenter" v-for="(item,index) in 4" :key="index">
                  <div class="flex flexAlignCenter flex1">
                      <img src="" alt="" class="quest_img">
                      <div class="flex1 flex flexAlignStart flexColumn ml2 font14 right_quest">
                          <div class="text_flow1 ">DBPOWER 12" Portable DVD Player with 5-Hour Rechargeable Battery, 10" Swivel Dis...</div>
                          <div>
                            <span class="color_red">Expire</span>
                            <span class="color_9 ">12 days ago</span>
                          </div>
                          <div class="flex flexAlignCenter flexWrap">
                              <span class="flex flexAlignCenter">
                                  <img src="../../assets/images/gms.png" alt="" class="icon1">
                                  <span class="font14">I have already purchased</span>
                              </span>
                              <span class="flex flexAlignCenter ml1">
                                  <img src="../../assets/images/dzs.png" alt="" class="icon1">
                                  <span>Recommend this product</span>
                              </span>
                              <span class="flex flexAlignCenter ml1">
                                  <img src="../../assets/images/bdzs.png" alt="" class="icon1">
                                  <span>Dislike</span>
                              </span>
                              <span class="flex flexAlignCenter ml1">
                                  <img src="../../assets/images/dels.png" alt="" class="icon1">
                                  <span>Don’t need this product any more</span>
                              </span>
                          </div>
                      </div>
                  </div>
                  <div class="flex font14 item_right ml10">
                      <div>
                          <div>
                              <span class="color_red font16">$48.99USD</span>
                              <s class="color_9 font14 ml1">$69.99USD</s>
                          </div>
                          <div class="mt1">8QKLE2NY</div>
                      </div>
                      <div class="buy_now">BUY NOW</div>
                  </div>
              </div>
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