<template>
  <div class="introduce">
      <!--主内容区域-->
      <div class="intr_main">
            <div class="img_bg">
                <img src="" alt="">
            </div>
            <div class="intr_duce">
                <!--What is Customer Vip-->
                <div class="floor1">
                    <div class="name_title">What is Customer Vip</div>
                    <div class="vip_card flex flexWrap justifyContentBetween">
                        <div v-for="(item,index) in 6" class="item_box">
                            <div class="card_item flex flexColumn flexAlignCenter justifyContentAround" :class="{'active':index==0}">
                                <img src="../../assets/images/vip1.png" alt="" 
                            class="card_logo" v-if="index==0">
                                <img src="../../assets/images/vip2.png" alt="" 
                                class="card_logo" v-else>
                                <div class="font_bold">FREE</div>
                                <div class="font14">Three chances to claim coupon code</div>
                                <div class="get color_red text_underline">GET</div>
                            </div>
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
                <!--How It Works-->
                <div class="floor2">
                    <div class="name_title">How It Works</div>
                    <div class="flex justifyContentAround mt8">
                        <div class="how_btn active">Sellers Share Deals</div>
                        <div class="how_btn ">Community Publish</div>
                        <div class="how_btn ">Shoppers Get Deals</div>
                    </div>
                    <div class="flex flexAlignCenter gwc_floor">
                        <div class="flex1 gwc_left">
                            <img src="../../assets/images/gwc.png" alt="" class="icon_gwc">
                            <div class="color_red font30">Sellers Share Deals</div>
                            <div class="font14 text_flow1">Amazon sellers share deals and coupons for a huge selection of products, most 50% off or more.</div>
                        </div>
                        <img src="" alt="" class="floor_img">
                    </div>
                </div>
                <div class="floor3 flex justifyContentBetween">
                    <div class="fl3_item" v-for="(item,value) in 3" :key="value">
                        <div class="img_fl3">
                            <img src="../../assets/images/c3.png" alt="" class="c3_icon" v-if="value == 0">
                            <img src="../../assets/images/c1.png" alt="" class="c1_icon" v-if="value == 1">
                            <img src="../../assets/images/c2.png" alt="" class="c2_icon" v-if="value == 2">
                        </div>
                        <div class="font30 color_red mt5">{{value==0?'Cheaper':(value==1?'Discount':'Seller')}}?</div>
                        <div class="mt5 font14 font_bold desc" v-if="value==0||value==1">We get hundreds of new Amazon promotions every day. If you are already planning on buying a product through Amazon, try searching on Vipon.com first. There's a good chance you will discover a HUGE discount.</div>
                        <div class="mt5 font_bold font14" v-else>
                            <div class="text_flow1">Offer Great Deals, Skyrocket Sales!</div>
                            <div class="color_red mt5">Seller Center >></div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
      <foot></foot>
  </div>
</template>
<script>
import Swiper from 'swiper';
import foot from '../../components/foot.vue';
export default{
  data(){
      return{
          
          
      }
  },
  components:{
      foot
  },
  watch:{
      
     
      
  },
  mounted(){
    
  },
  methods:{
        
      
  }

}
</script>
<style>
@import url("../../assets/css/product.less");
</style>