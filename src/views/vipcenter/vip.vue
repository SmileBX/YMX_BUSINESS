<template>
    <div class="vip_info">
        <div class="color_red font18 font_bold title text_left">VIP</div>
        <div class="card_list flex mt8 pl56 justifyContentBetween">
            <div class="card_item" v-for="(item,index) in 3" :class="{'active':index==0}">
                <div class="flex flexAlignCenter justifyContentBetween">
                    <img src="../../assets/images/vip.png" alt="" class="vip_logo" v-if="index==0">
                    <img src="../../assets/images/cou.png" alt="" class="icon_cou" v-if="index==1">
                    <img src="../../assets/images/money.png" alt="" class="icon_cou" v-if="index==2">
                    <div class="flex1 flex flexColumn flexAlignStart ml1">
                        <div class="flex flexAlignCenter">
                          <span class="font18">VIP1</span> 
                          <img src="../../assets/images/upon.png" alt="" class="icon_up ml2" v-if="index==0">
                        </div>
                        <div class="mt1">
                            <span class="font14 date_time">2020-12-12 Maturity</span>
                            <span class="text_underline font14">Renewal >></span>
                        </div>
                    </div>
                </div>
                <div class="mt2 font14">Three chances to claim coupon code</div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss">
@import url("../../assets/css/mine.less");
</style>