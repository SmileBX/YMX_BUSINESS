<template>
  <div class="mine_vip">
      <!---左侧组件-->
      <div class="mine_menu">
          <div class="mine_account font_bold font18 flex flexColumn flexAlignCenter justifyContentBetween">
            <img :src="avtar" alt="" class="img_ava">
            <div class="mt2">{{username}}</div>
            <div class="mt2">{{level_name}}</div>
            <div class="mt1 cli_pointer" @click="toProfile">Edit Profile >></div>
          </div>
          <el-row class="tac boxSize mt2">
            <el-col :span="12">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-vertical-demo font_bold font16"
                @select="choseIndex"
                >
                <el-menu-item index="1">
                  <i class="el-icon-s-platform"></i>
                  <span slot="title">Favorites</span>
                </el-menu-item>
                <!-- <el-menu-item index="2">
                  <i class="el-icon-shopping-cart-2"></i>
                  <span slot="title">Deal Requested</span>
                </el-menu-item> -->
                <el-menu-item index="3">
                  <i class="el-icon-s-opportunity"></i>
                  <!-- <el-badge :value="2" :max="99" class="item "> -->
                  <el-badge  class="item ">
                    Notification
                  </el-badge>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-attract"></i>
                  <span slot="title">VIP</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-s-custom"></i>
                  <span slot="title">Profile</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-key"></i>
                  <span slot="title">Change Password</span>
                </el-menu-item>
                <el-menu-item index="7">
                  <i class="el-icon-s-open"></i>
                  <span slot="title">spare</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
      </div>
      <!--手机端-->
      <div class="mine_mobile">
          <div class="mine_account font_bold font18 flex flexColumn flexAlignCenter justifyContentBetween">
            <img src="" alt="" class="img_ava">
            <div class="mt2">Vision_1776829</div>
            <div class="mt2">VIP0</div>
            <div class="mt1">Edit Profile >></div>
          </div>
          <el-menu :default-active="activeIndex" class="el-menu-demo el_mobile_menu" mode="horizontal" @select="choseIndex">
            <el-menu-item index="1" class="flex flexColumn flexAlignCenter four_em_item">
              <i class="el-icon-s-platform"></i>
              <span slot="title">Favorites</span>
            </el-menu-item>
            <!-- <el-menu-item index="2" class="flex flexColumn flexAlignCenter four_em_item">
              <i class="el-icon-shopping-cart-2"></i>
              <span slot="title">Deal Requested</span>
            </el-menu-item> -->
            <el-menu-item index="3" class="flex flexColumn flexAlignCenter four_em_item">
              <i class="el-icon-s-opportunity"></i>
              <el-badge  :max="99" class="item mobile_badeg">
                Notification
              </el-badge>
              <!-- <span slot="title">Notification</span> -->
            </el-menu-item>
            <el-menu-item index="4" class="flex flexColumn flexAlignCenter four_em_item">
              <i class="el-icon-attract"></i>
              <span slot="title">VIP</span>
            </el-menu-item>
            <el-menu-item index="5" class="flex flexColumn flexAlignCenter four_em_item">
              <i class="el-icon-s-custom"></i>
              <span slot="title">Profile</span>
            </el-menu-item>
            <el-menu-item index="6" class="flex flexColumn flexAlignCenter four_em_item">
              <i class="el-icon-key"></i>
              <span slot="title">Change Password</span>
            </el-menu-item>
            <el-menu-item index="7" class="flex flexColumn flexAlignCenter four_em_item">
              <i class="el-icon-s-open"></i>
              <span slot="title">spare</span>
            </el-menu-item>
          </el-menu> 
      </div>
      <div class="slider"></div>
      <!---单页面-->
      <div class="flex1 mine_box_right">
        <router-view></router-view>
      </div>
      
  </div>
</template>
<script>
  import {post,get} from '@/api/axios.js'
  import {getToken} from '@/utils/auth.js'
    export default {
    data(){
      return{
        activeIndex:"1",
        username:'',
        avtar:'',
        level_name:''
      }
    },
    created(){
      if(this.$route.query.type){
        this.activeIndex = this.$route.query.type
      }else{
        this.activeIndex="1"
      }
      this.getUserInfo()
    },
    methods: {
      getUserInfo(){
          let query = {
              user_token:getToken()
          }
          post('user/getuserinfo',query).then(res=>{
              if(res.code == 0){
                  this.username = res.data.username
                  this.level_name = res.data.level_name
                  this.avtar = res.data.avtar
                  
              }
          })
      },
      toProfile(){
        this.$router.push({
            path:"/mine/edit",
            query:{
              type:5,
            }
        })
      },
      choseIndex(key, keyPath){
        // console.log(key,"key")
        this.activeIndex = key
        let urlPath = ''
        // console.log(this.activeIndex,"activeIndex")
        if(key==1){
          urlPath = "/mine/like"
        }else if(key==2){
          urlPath = "/mine/request"
        }else if(key==3){
          urlPath = "/mine/notice"
        }else if(key==4){
          urlPath = "/mine/vip"
        }else if(key==5){
          urlPath = "/mine/edit"
        }else if(key==6){
          urlPath = "/mine/change"
        }else{
          urlPath = "/mine/spare"
        }
        this.$router.push({
            path:urlPath,
            query:{
              type:this.activeIndex,
        }})
      },
      
    },

  }
</script>
<style lang="less">
  @import url("../../assets/css/mine.less");
  .el-col{
    width:100%!important;
  }
  .el-submenu__title{

  }
  .el-menu-item{
    text-align: left;
    font-size:0.14rem;
    padding: 0 0.2rem;
    height:0.56rem;
    line-height: 0.56rem;
   border-bottom: none;
  }
  .el-menu-vertical-demo.el-menu{
    border-right:0;
    width:100%;
  }
  .el-menu-item.is-active,.el-menu-item.is-active{
    color:#FD6A6C
  }
  .el-badge{
    width:80%;
  }
  .el-badge__content.is-fixed{
    top:50%;
    right:0;
    transform: translateY(-50%);
  }
  .el-button{
    border: none;
    padding:0;
    color: #303133;
  }
  .el-menu--horizontal>.el-menu-item{
    line-height:1.2;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 2px solid #FD6A6C;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
  .mobile_badeg .el-badge__content.is-fixed{
      right:-0.5rem;top:-0.2rem;
  }
  .el-menu-vertical-demo.el-menu{
    border-right:0;
    width:100%;
  }
  .el-menu-item.is-active,.el-menu-item.is-active{
    color:#FD6A6C!important;
  }
</style>