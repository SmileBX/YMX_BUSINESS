<template>
    <div class="vip_info">
        <div class="color_red font18 font_bold title text_left">VIP</div>
        <div class="card_list flex mt8 pl56  flexWrap ">
            <div class="card_item mr2" v-for="(item,index) in 1" :class="{'active':index==0}">
                <div class="flex flexAlignCenter justifyContentBetween">
                    <img src="../../assets/images/vip.png" alt="" class="vip_logo" v-if="index==0">
                    <img src="../../assets/images/cou.png" alt="" class="icon_cou" v-if="index==1">
                    <!-- <img src="../../assets/images/money.png" alt="" class="icon_cou" v-if="index==2"> -->
                    <div class="flex1 flex flexColumn flexAlignStart ml1 justifyContentBetween">
                        <div class="flex flexAlignCenter">
                          <span class="font18" v-if="index==0">{{level_info.level_name}}</span>
                          <span class="font18" v-if="index==1">{{level_info.times}} / {{level_info.total_times}}</span> 
                          <img src="../../assets/images/upon.png" alt="" class="icon_up ml1" v-if="index==0">
                        </div>
                        <div class="mt1 flex justifyContentBetween w100" v-if="index==0">
                            <span class="font14 date_time">{{level_info.expire_date}} Maturity</span>
                            <span class="text_underline font12">Renewal >></span>
                        </div>
                        <div class="mt1 flex justifyContentBetween w100" v-if="index==1">
                            <span class="font14 date_time">{{level_info.total_times}} times in total</span>
                            <span class="text_underline font12">Detail >></span>
                        </div>
                    </div>
                </div>
                <div class="mt2 font14" v-if="index==0">Three chances to claim coupon code</div>
                <div class="mt2 font14" v-if="index==1">This is the introduction of your coupon</div>
            </div>
        </div>
        <div class="vip_list">
            <div class="flex list_head_nav justifyContentBetween font_bold">
                <div class="">title</div>
                <div class="border_left ">Optional discount</div>
                <div class="border_left ">Times</div>
                <div class="border_left ">Monthly fee</div>
                <div class="border_left ">Quarter fee</div>
                <div class="border_left ">Fee</div>
                <div class="border_left">Is_get</div>
            </div>
            <div class="list_mian ">
                <div class="flex   justifyContentBetween list_item" v-for="(item,key) in vipList" :key="key">
                    <div class="">{{item.title}}</div>
                    <div >
                        <span class="color_red">{{item.discount}}%</span>
                        off and above
                    </div>
                    <div >{{item.times}} Times for free</div>
                    <div >
                        <span class="color_red">{{item.month_fee}}</span>
                        USD / Month
                    </div>
                    <div >
                        <span class="color_red">{{item.quarter_fee}}</span>
                        USD / Quarter
                    </div>
                    <div >
                        <span class="color_red">{{item.fee}}</span>
                        USD / Year
                    </div>
                    <div class="color_red text_underline cli_pointer" @click="makeOrder(item)">{{item.is_get==0?'Get':'Use'}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {get,post} from '@/api/axios.js'
import {getToken} from '@/utils/auth.js'
import { getStore, setStore, removeStore } from "@/utils/store";
export default{
    data(){
        return{
            query:{
                user_token:getToken()
            },
            vipList:[],
            level_info:{},
        }
    },
    created () {
        removeStore('vip_level')
        this.getVipList()
    },
    methods: {
        getVipList(){
            post('/user/vip?lang=en-us',this.query).then(res=>{
                if(res.code == 0){
                    this.vipList = res.data.list
                    this.level_info = res.data.level_info
                }
            }).catch((err)=>{})
        },
        //展示订单
        makeOrder(item){
            if(item.is_get==0){
                setStore('vip_level',item)
                this.$router.push({
                path:'/mine/submit'
                })
            }
        }
    }
}
</script>
<style lang="scss">
@import url("../../assets/css/mine.less");
</style>