<template>
  <div class="flex deal_list">
      <div class="pro_item" v-for="(item,index) in 20" :key="index">
          <div class="item_mask font14 flex">
              <div class="get_coupon">Get Coupon</div>
              <div class="mt2">View detial >></div>
          </div>
          <img src="../assets/images/pic.png" alt="" class="item_img">
          <div class="item_main">
              <div class="text_flow1 font_bold item_title mt1">Bedsure 金粉世家大棚房管局评估价攀升</div>
              <div class="font12 color_9 item_subtitle">Fulfilled by Amazon</div>
              <div class="flex justifyContentBetween w100">
                  <div class="flex flex1 ">
                      <span class="text_through">$109.00</span>
                      <span class="item_spill">-50%</span>
                  </div>
                  <div class="item_money">$54.50</div>
              </div>
              <div class="flex justifyContentBetween mt1 w100 color_9">
                <div class="flex flexAlignCenter">
                    <img src="../assets/images/zan.png" alt="" class="icon_zan">
                    <span class="ml1">11</span>
                </div>
                <div class="flex flexAlignCenter">
                  <img src="../assets/images/comment.png" alt="" class="icon_mes">
                    <span class="ml1">0</span>
                </div>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
  export default{
    data(){
      return{
        activeIndex:"1",
      }
    },
    mthods:{
      
    }
  }
</script>
<style lang="less" scoped>
  @import url("../assets/css/media.less");
  .deal_list{
    margin-top:0.2rem;
    flex-wrap: wrap;
  }
  .text_flow1{
    overflow: hidden!important;
    white-space: nowrap!important;
    text-overflow: ellipsis!important;
  }
  .pro_item{
    padding:0.13rem 0.15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    margin-right:0.27rem;
    margin-top:0.39rem;
    font-size:0.14rem;
    position: relative;
  }
  .pro_item:hover .item_mask{
    display: flex;
  }
  .item_mask{
    display: none;
    position: absolute;
    top:0;
    left:0;
    width:100%;height:100%;
    background:rgba(255,94,109,0.5);
    flex-direction: column;
    color:#ffffff;
    align-items: center;
    justify-content: center;
  }
  .get_coupon{
    border:1px solid #ffffff;
    width:60%;
    padding:0.1rem 0;
  }

  .item_money{
    color:#ff0000;
    font-size:0.16rem;
    font-weight:bold;
  }
  .item_main{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .item_title{
    width:100%;
  }
  .item_subtitle{
    margin:0.06rem 0;
  }
  .icon_zan{
    width:11px;height: 11px;
  }
  .icon_mes{
    width:11px;height: 9px;
  }
  .item_spill{
    padding:0.01rem 0.05rem;
    background:rgba(255,153,0,1);
    border-radius:0.03rem;
    color:#ffffff;
    font-size:0.10rem;
    margin-left:0.2rem;
  }
</style>