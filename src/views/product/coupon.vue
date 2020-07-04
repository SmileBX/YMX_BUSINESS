<template>
    <div class="coupon flex justifyContentCenter flexAlignCenter">
        <div class="flex flexColumn flexAlignCenter coupon_card">
            <div class="flex flexColumn flexAlignCenter conpon_main justifyContentAround">
                <img src="../../assets/images/icon.png" alt="" class="icon_gou">
                <div class="font_bold">You’ve saved ${{total}}</div>
                <div class="font12">Coupon may expires at anytime.Use it now!</div>
                <div class="font18">{{code}}</div>
                <input type="text" id="copyObj" v-model="code" style="opacity: 0;position: absolute;top:0;z-index:-9999999">
                <div class="font18 coupon_btn cli_pointer" @click="copyGo">Copy and Go to Amazon</div>
            </div>
            <div class="more">Find more coupons >></div>
        </div>
    </div>
</template>
<script>
import {getToken} from '@/utils/auth.js'
export default{
    data(){
        return{
            query:{
                id:'',
                user_token:getToken()
            },
            code:'GJ54',
            total:0,
            amzUrl:''
        }
    },
    created () {
        this.query.id = this.$route.params.id
        let before_price = parseInt(this.$route.params.befor_price)
        let currency_price = parseInt(this.$route.params.currency_price)
        this.total = before_price - currency_price  
        console.log(currency_price,"this.query.id")
        this.amzUrl = this.$route.params.amzUrl
        this.getCode()
    },
    methods: {
        getCode(){
          this.$store.dispatch('getAmzurlCode',this.query).then(res=>{
            if(res.code == 0){
                this.code = res.data
            }
          })
        }, 
        copyGo(){
            let url = document.querySelector('#copyObj');
            url.select(); // 选择对象
            document.execCommand("Copy");
            this.$message({
                message:'复制成功!',
                type:'success'
            })
            setTimeout(()=>{
                window.open(this.amzUrl,"_blank")
            },1500)
        }
    }
}
</script>
<style lang="less">
  @import url("../../assets/css/product.less");
</style>