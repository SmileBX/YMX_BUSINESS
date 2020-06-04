<template>
    <div class="pro_item">
        <img src="" alt="" class="item_img">
        <div class="item_main">
            <div class="text_flow1 font_bold item_title">Bedsure 金粉世家大棚房管局评估价攀升</div>
            <div class="font12 color_9 item_subtitle">Fulfilled by Amazon</div>
            <div class="flex justifyContentBetween w100">
                <div class="flex flex1 ">
                    <span class="text_through">$109.00</span>
                    <span class="item_spill">-50%</span>
                </div>
                <div class="item_money">$54.50</div>
            </div>
            <div class="flex justifyContentBetween mt1 w100 color_9">
              <div class="flex">
                  <img src="../assets/images/icon.png" alt="" class="icon_zan">
                  <span class="ml1">11</span>
              </div>
              <div class="flex">
                <img src="../assets/images/icon.png" alt="" class="icon_mes">
                  <span class="ml1">0</span>
              </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
  .text_flow1{
    overflow: hidden!important;
    white-space: nowrap!important;
    text-overflow: ellipsis!important;
  }
  .pro_item{
    border:1px solid blue;
    padding:0.13rem 0.15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    margin-right:0.27rem;
    margin-top:0.39rem;
    font-size:0.14rem;
    
  }
  .item_img{
    border:1px solid red;
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