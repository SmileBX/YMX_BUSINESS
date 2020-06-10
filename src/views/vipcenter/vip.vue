<template>
    <div class="vip_info">
        <div class="color_red font18 font_bold title text_left">VIP</div>
        <div class="card_list flex mt8 pl56  flexWrap justifyContentBetween">
            <div class="card_item" v-for="(item,index) in 3" :class="{'active':index==0}">
                <div class="flex flexAlignCenter justifyContentBetween">
                    <img src="../../assets/images/vip.png" alt="" class="vip_logo" v-if="index==0">
                    <img src="../../assets/images/cou.png" alt="" class="icon_cou" v-if="index==1">
                    <img src="../../assets/images/money.png" alt="" class="icon_cou" v-if="index==2">
                    <div class="flex1 flex flexColumn flexAlignStart ml1 justifyContentBetween">
                        <div class="flex flexAlignCenter">
                          <span class="font18">VIP1</span> 
                          <img src="../../assets/images/upon.png" alt="" class="icon_up ml1" v-if="index==0">
                        </div>
                        <div class="mt1 flex justifyContentBetween w100">
                            <span class="font14 date_time">2020-12-12 Maturity</span>
                            <span class="text_underline font12">Renewal >></span>
                        </div>
                    </div>
                </div>
                <div class="mt2 font14">Three chances to claim coupon code</div>
            </div>
        </div>
        <div class="vip_list">
            <div class="flex list_head_nav justifyContentBetween font_bold">
                <div class="">VIP</div>
                <div class="border_left ">Discount</div>
                <div class="border_left ">Times</div>
                <div class="border_left ">Fee</div>
                <div class="nav_long border_left">Detailed introduction</div>
                <div class="border_left">Get</div>
            </div>
            <div class="list_mian ">
                <div class="flex   justifyContentBetween list_item" v-for="(item,key) in 6" :key="key">
                    <div class="">VIP{{key}}</div>
                    <div >
                        <span class="color_red">30%</span>
                        off and above
                </div>
                    <div >3 Times for free</div>
                    <div >
                        <span class="color_red">18</span>
                        USD / YEAR
                    </div>
                    <div class="nav_long">Introduction of VIP1</div>
                    <div class="color_red text_underline">Use</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss">
@import url("../../assets/css/mine.less");
</style>