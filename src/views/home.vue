<template>
    <div class="home">
        <!--主内容区域-->
        <div class="home_main flex">
            <div class="home_left">
                <!---大轮播-->
                <div class="swiper-container swiper_floor1" style="height:4.01rem;">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">slider1</div>
                      <div class="swiper-slide">slider2</div>
                      <div class="swiper-slide">slider3</div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
                </div>
                <!--分组轮播1-->
                <div class="mt5">
                    <div class="font24 font_bold text_left">FREE TRIAL</div>
                    <div class="swiper-container swiper-container2 mt3 font16">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide swiper-slide2" v-for="(item,index) in 10" :key="index">
                                <div class="pro_item1">
                                    <div class="item_mask font14 flex">
                                        <div class="get_coupon">Get Coupon</div>
                                        <div class="mt2">View detial >></div>
                                    </div>
                                    <img src="" alt="" class="item_img">
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
                        </div>
                        <!-- Add Pagination -->
                        <!-- <div class="swiper-pagination swiper-pagination2"></div> -->
                        <!-- Add Arrows -->
                        <div class="swiper-button-next swiper-button-next2"></div>
                        <div class="swiper-button-prev swiper-button-prev2"></div>
                    </div>
                </div>
                <!--分组轮播2-->
                <div class="mt5">
                    <div class="font24 font_bold text_left">TEN-PERCENT DISCOUNT</div>
                    <div class="swiper-container swiper-container2 mt3 font16">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide swiper-slide2" v-for="(item,index) in 10" :key="index">
                                <div class="pro_item1">
                                    <div class="item_mask font14 flex">
                                        <div class="get_coupon">Get Coupon</div>
                                        <div class="mt2">View detial >></div>
                                    </div>
                                    <img src="" alt="" class="item_img">
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
                        </div>
                        <!-- Add Pagination -->
                        <!-- <div class="swiper-pagination swiper-pagination2"></div> -->
                        <!-- Add Arrows -->
                        <div class="swiper-button-next swiper-button-next2"></div>
                        <div class="swiper-button-prev swiper-button-prev2"></div>
                    </div>
                </div>
                <!---首页推荐列表-->
                <div class="mt5">
                    <div class="font24 font_bold text_left">TEN-PERCENT DISCOUNT</div>
                    <div class="pw2">
                        <proItem></proItem>
                    </div>
                </div>
                <!--seemore-->
                <div class="mt5 see_more">See More >></div>
            </div>
            <div class="home_right">
                <div class="right_head">
                    <img src="../assets/images/gg.png" alt="">
                </div>
                <!--列表-->
                <div class="mt5">
                    <div class="flex justifyContentBetween font20">
                        <div class="font_bold">Weekly Hot Deals</div>
                        <div class="color_red">More</div>
                    </div>
                    <div class="mt4 right_list">
                        <div class="right_item flex justifyContentBetween" v-for="(item,key) in 7" :key="key">
                            <img src="" alt="" class="right_item_img">
                            <div class="flex1 flex flexColumn flexAlignStart justifyContentBetween ml2">
                                <div class="text_flow font12">DAFENGEA Men's Outdoor Lightweight Breathable Quick Dry Hiking Pants, KZ335...</div>
                                <div>
                                    <span class="font_bold font16">$15.99</span>
                                    <span class="font12">
                                        <s class="font12">$31.99</s>
                                        <span class="color_blood font12">50% Discount</span>
                                    </span>
                                </div>
                                <div class="font12 flex justifyContentBetween w100">
                                    <div>
                                        <span>
                                            <img src="../assets/images/zan_t.png" alt="" class="com_icon">
                                            <span class="color_blood">268</span>
                                        </span>
                                        <span class="ml1">
                                            <img src="../assets/images/comment.png" alt="" class="com_icon">
                                            <span class="color_9">125</span>
                                        </span>
                                        <span class="ml1">
                                            <img src="../assets/images/zan_d.png" alt="" class="com_icon">
                                            <span class="color_9">12</span>
                                        </span>
                                    </div>
                                    <div class="color_red">Get coupon >></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---广告图片-->
                    <div>
                        <div class="big_img_box">
                            <img src="" alt="" class="big_pic">
                            <img src="../assets/images/x.png" alt="" class="del_icon">
                        </div>
                        <div class="big_img_box">
                            <img src="" alt="" class="big_pic">
                            <img src="../assets/images/x.png" alt="" class="del_icon">
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
import foot from '../components/foot.vue';
import proItem from '../components/proitem.vue';
export default{
    data(){
        return{
            screenWidth: document.body.clientWidth,
            swiperSlider:6,
        }
    },
    components:{
        foot,proItem
    },
    watch:{
        screenWidth(val){
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if(!this.timer){
                // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function(){
                    // 打印screenWidth变化的值
                    that.changeSlider()
                    that.timer = false
                },1000)
            }
        },
        // swiperSlider(){
        //     this.initSwiperGroup()
        // }
        
    },
    mounted(){
      new Swiper ('.swiper-container.swiper_floor1', {
        autoplay:true,
        loop: true,
        // 如果需要分页器
        pagination: {
          el:'.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      }) 
      this.reSetWindow()
      this.changeSlider()
    },
    methods:{
        changeSlider(){
            // console.log(this.screenWidth,"333333333333333333333333")
            if(this.screenWidth>1500){
                this.swiperSlider = 6
            }else if(this.screenWidth<1500 && this.screenWidth>1200){
                this.swiperSlider = 5
            }else if(this.screenWidth<1200 && this.screenWidth>900){
                this.swiperSlider = 4
            }else if(this.screenWidth<900 && this.screenWidth>600){
                this.swiperSlider = 3
            }else{
                this.swiperSlider = 2
            }
            // console.log(this.swiperSlider,"llllllllllllllll")
            this.$nextTick(()=>{
                this.initSwiperGroup()
            })
        },
        reSetWindow(){
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    this.screenWidth = window.screenWidth
                })()
            }
        },
        initSwiperGroup(){
            new Swiper('.swiper-container.swiper-container2', {
                slidesPerView: this.swiperSlider,
                spaceBetween: 35,
                slidesPerGroup: this.swiperSlider,
                // autoplay:false,
                // loop: true,
                loopFillGroupWithBlank: true,
                // pagination: {
                //     el: '.swiper-pagination.swiper-pagination2',
                //     clickable: true,
                // },
                navigation: {
                    nextEl: '.swiper-button-next.swiper-button-next2',
                    prevEl: '.swiper-button-prev.swiper-button-prev2',
                },
            });   
        }
    }

}
</script>
<style>
@import url("../assets/css/product.less");
.swiper-container{
    /* height:4.01rem; */
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #ff6600;/* 两种都可以 */
  }
  .swiper-slide{
    /* height:4.01rem;line-height: 4.01rem; */
    border:1px solid red;
  }
  .swiper-button-prev, .swiper-button-next{
      color:#999999;
  }
  .swiper-pagination{
    width:100%;height:0.3rem;
  }
  .swiper-container2{
      width:100%;
      /* border:1px solid black; */
  }
  .swiper-slide2{
      /* width:2rem;height:4rem; */
      border:1px solid orange;
  }
</style>