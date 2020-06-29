<template>
    <div class="home">
        <!--主内容区域-->
        <div class="home_main flex">
            <div class="home_left">
                <!---大轮播-->
                <div class="swiper-container swiper_floor1" style="height:4.01rem;width:14rem;">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
                          <img :src="item.image" alt="" class="banner_img">
                      </div>
                    </div>
                    <div class="swiper-button-next "></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
                </div>
                <!--分组轮播1-->
                <div class="mt5 home_banner">
                    <div class="font24 font_bold text_left">FREE TRIAL</div>
                    <div class="swiper-container swiper-container2 mt3 font16" style="width:90%;" v-if="hasSwiper">
                        <div class="swiper-wrapper swiper_home2" >
                            <div class="swiper-slide swiper-slide2" v-for="(item2,index2) in floor1data" :key="index2" >
                                <div class="pro_item1">
                                    <div class="item_mask font14 flex">
                                        <div class="get_coupon">Get Coupon</div>
                                        <div class="mt2 cli_pointer" @click="detail(item2)">View detial >></div>
                                    </div>
                                    <img :src="item2.image" alt="" class="item_img">
                                    <div class="item_main">
                                        <div class="text_flow1 font_bold item_title mt1">{{item2.name}}</div>
                                        <div class="font12 color_9 item_subtitle">Fulfilled by Amazon</div>
                                        <div class="flex justifyContentBetween w100">
                                            <div class="flex flex1 ">
                                                <span class="text_through">${{item2.currency_price}}</span>
                                                <span class="item_spill">-50%</span>
                                            </div>
                                            <div class="item_money">${{item2.price}}</div>
                                        </div>
                                        <div class="flex justifyContentBetween mt1 w100 color_9">
                                          <div class="flex flexAlignCenter">
                                              <img src="../assets/images/zan.png" alt="" class="icon_zan">
                                              <span class="ml1">{{item2.review}}</span>
                                          </div>
                                          <div class="flex flexAlignCenter">
                                            <img src="../assets/images/comment.png" alt="" class="icon_mes">
                                              <span class="ml1">{{item2.fabulous_count}}</span>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <!-- <div class="swiper-pagination swiper-pagination2"></div> -->
                        <!-- Add Arrows -->
                       
                    </div>
                    <div class="swiper-button-next swiper-button-next2"></div>
                    <div class="swiper-button-prev swiper-button-prev2"></div>
                </div>
                <!--分组轮播2-->
                <div class="mt5 home_banner">
                    <div class="font24 font_bold text_left">TEN-PERCENT DISCOUNT</div>
                    <div class="swiper-container swiper-container3 mt3 font16" style="width:90%;">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide swiper-slide2" v-for="(item3,index3) in floor2data" :key="index3" >
                                <div class="pro_item1">
                                    <div class="item_mask font14 flex">
                                        <div class="get_coupon">Get Coupon</div>
                                        <div class="mt2 cli_pointer" @click="detail(item3)">View detial >></div>
                                    </div>
                                    <img :src="item3.image" alt="" class="item_img">
                                    <div class="item_main">
                                        <div class="text_flow1 font_bold item_title mt1">{{item3.name}}</div>
                                        <div class="font12 color_9 item_subtitle">Fulfilled by Amazon</div>
                                        <div class="flex justifyContentBetween w100">
                                            <div class="flex flex1 ">
                                                <span class="text_through">${{item3.currency_price}}</span>
                                                <span class="item_spill">-50%</span>
                                            </div>
                                            <div class="item_money">${{item3.price}}</div>
                                        </div>
                                        <div class="flex justifyContentBetween mt1 w100 color_9">
                                          <div class="flex flexAlignCenter">
                                              <img src="../assets/images/zan.png" alt="" class="icon_zan">
                                              <span class="ml1">{{item3.review}}</span>
                                          </div>
                                          <div class="flex flexAlignCenter">
                                            <img src="../assets/images/comment.png" alt="" class="icon_mes">
                                              <span class="ml1">{{item3.fabulous_count}}</span>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="swiper-button-next swiper-button-next3"></div>
                    <div class="swiper-button-prev swiper-button-prev3"></div>
                </div>
                <!---首页推荐列表-->
                <div class="mt5" v-for="(item4,index4) in proList">
                    <div class="font24 font_bold text_left"  v-if="item4.list.length>0">{{item4.us_title}}</div>
                    <div class="pw2" v-if="item4.list.length>0">
                        <proItem :data="item4.list" @success="toDetail"></proItem>
                    </div>
                </div>
                <!--seemore-->
                <div class="mt5 see_more cli_pointer" @click="showMore">See More >></div>
            </div>
            <div class="home_right">
                <div class="right_head">
                    <img src="../assets/images/gg.png" alt="">
                </div>
                <!--列表-->
                <div class="mt5">
                    <div class="flex justifyContentBetween font20">
                        <div class="font_bold">Weekly Hot Deals</div>
                        <div class="color_red cli_pointer" @click="showMore">More</div>
                    </div>
                    <div class="mt4 right_list">
                        <div class="right_item flex justifyContentBetween cli_pointer" v-for="(item,key) in rightList" :key="key" @click="detail(item)">
                            <img :src="item.image" alt="" class="right_item_img">
                            <div class="flex1 flex flexColumn flexAlignStart justifyContentBetween ml2">
                                <div class="text_flow font12">{{item.name}}</div>
                                <div class="home_price_right">
                                    <span class="font_bold font16">${{item.currency_price}}</span>
                                    <span class="font12">
                                        <s class="font12">${{item.price}}</s>
                                        <span class="color_blood font12">50% Discount</span>
                                    </span>
                                </div>
                                <div class="font12 flex justifyContentBetween w100 right_list_bottom">
                                    <div>
                                        <span>
                                            <img src="../assets/images/zan_t.png" alt="" class="com_icon">
                                            <span class="color_blood">{{item.review}}</span>
                                        </span>
                                        <span class="ml1">
                                            <img src="../assets/images/comment.png" alt="" class="com_icon">
                                            <span class="color_9">{{item.fabulous_count}}</span>
                                        </span>
                                        <!-- <span class="ml1">
                                            <img src="../assets/images/zan_d.png" alt="" class="com_icon">
                                            <span class="color_9">12</span>
                                        </span> -->
                                    </div>
                                    <div class="color_red">Get coupon >></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---广告图片-->
                    <div>
                        <div class="big_img_box">
                            <img src="../assets/images/pic.png" alt="" class="big_pic">
                            <img src="../assets/images/x.png" alt="" class="del_icon">
                        </div>
                        <div class="big_img_box">
                            <img src="../assets/images/pic.png" alt="" class="big_pic">
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
import {post,get} from '@/api/axios.js'
import {getToken} from '@/utils/auth.js'
import Swiper from 'swiper';
import foot from '../components/foot.vue';
import proItem from '../components/proitem.vue';

export default{
    data(){
        return{
            screenWidth: document.body.clientWidth,
            swiperSlider:6,
            bannerList:[],
            floor1data:[],
            floor2data:[],
            proList:[],
            rightList:[],
            hasSwiper:false
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
        this.reSetWindow()
        this.changeSlider()
    },
    created () {
        this.$emit('header', true);
        this.getBanner()
        this.getAllList()//所有的产品 分类轮播 右侧列表
    },
    methods:{
        //初始化顶部萝卜兔
        initBanner(){
            new Swiper ('.swiper-container.swiper_floor1', {
                autoplay:true,
                loop: true,
                observer:true,
                // 如果需要分页器
                pagination: {
                el:'.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }) 
        },
        initFloor(){

        },
        //所有关于产品的列表
        getAllList(){
            let query = {
                user_token:getToken()
            }
            post('/goods/goods_index',query).then(res=>{
                if(res.code == 0){
                    let _this = this
                    this.rightList = res.data.weekly_hot_deal
                    this.floor1data = res.data.cate_list[0].list
                    this.floor2data = res.data.cate_list[1].list
                    this.proList = res.data.cate_list.slice(2)
                    console.log(this.floor1data,"111111111111")
                    console.log(this.floor2data,"22222222222222")
                    this.$nextTick(function () {
                        _this.initSwiperGroup()
                    })
                }
            })
        },
        //轮播图
        getBanner(){
            let query = {
                type:1,//1:首页轮播 7:商品首页轮播
                limit:5
            }
            post('common/getbanner',query).then(res=>{
                if(res.code == 0){
                    let _this = this
                    this.bannerList = res.data
                    this.$nextTick(function () {
                        _this.initBanner()
                    })
                }
            })
        },
        //查看更多
        showMore(){
            this.$router.push('/deal')
        },
        //商品详情
        detail(item){
            this.$router.push({
                path:'/detail',
                query:{
                    id:item.id
                }
            })
        },
        toDetail(id){
            this.$router.push({
                path:'/detail',
                query:{
                    id:id
                }
            })
        },
        changeSlider(){
            console.log(this.screenWidth,"333333333333333333333333")
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
            console.log(this.swiperSlider,"llllllllllllllll")
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
            console.log("8585858585")
            this.hasSwiper = true
            new Swiper('.swiper-container.swiper-container2', {
                slidesPerView: this.swiperSlider,
                spaceBetween: 30,
                observer:true,
                // slidesPerGroup: this.swiperSlider,
                autoplay:true,
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
            new Swiper('.swiper-container.swiper-container3', {
                slidesPerView: this.swiperSlider,
                spaceBetween: 30,
                observer:true,
                // slidesPerGroup: this.swiperSlider,
                autoplay:true,
                // loop: true,
                loopFillGroupWithBlank: true,
                // pagination: {
                //     el: '.swiper-pagination.swiper-pagination2',
                //     clickable: true,
                // },
                navigation: {
                    nextEl: '.swiper-button-next.swiper-button-next3',
                    prevEl: '.swiper-button-prev.swiper-button-prev3',
                },
                
            });   
        }
    }

}
</script>
<style lang="less">
@import url("../assets/css/product.less");
.swiper-container{
    /* width:14rem; */
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #ff6600;/*两种都可以*/
    --swiper-navigation-size: 0.8rem;/* 设置按钮大小 */
    outline: none ;
  }
  .swiper_floor1{
    width:100%;
  }
  .swiper_floor1 .swiper-slide .banner_img{
        width:100%;
    }
  .swiper-button-prev, .swiper-button-next{
      color:#999999;
      outline: none;
  }

  .swiper-pagination{
    width:100%;height:0.3rem;
  }
  .swiper-container2{
      width:90%;
  }
  .home_banner{
      position: relative;
  }
</style>