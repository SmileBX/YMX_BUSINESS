<template>
  <div class="profile">
      <div class="color_red font18 font_bold title text_left">Profile Date</div>
      <div class="file_form font12">
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Avatar</span>
                <div class="item_right ava_flex">
                    <img :src="avtar" alt="" class="icon_avatar">
                    <div class="flex flexAlignCenter ml3">
                        <span>change</span>
                        <img src="../../assets/images/edit.png" alt="" class="icon_edit">
                    </div>
                </div>
                <span class="color_9 font12"><span class="color_red">*</span>Uploaded image should be no more than 2MB.</span>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">E-mail</span>
                <div class="item_right">
                    <input type="text" v-model="query.email">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">User name</span>
                <div class="item_right">
                    <input type="text" v-model="query.username" ref="gain">
                    <img src="../../assets/images/edit.png" alt="" class="icon_edit" @click="editName">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Gender</span>
                <div class="item_right">
                    <el-radio-group v-model="query.sex" class="flex jusifyContentBetween flexAlignCenter" @change="changeRadio">
                        <el-radio :label="1">Male</el-radio>
                        <el-radio :label="2">Female</el-radio>
                        <el-radio :label="3">Other</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Birthday</span>
                <div class="input_box item_right">
                    <el-date-picker
                    v-model="query.birth"
                    type="date"
                    placeholder="Chose Date">
                    </el-date-picker>
                    <!-- <input type="text" v-model="query.birth"> -->
                    <!-- <img src="../../assets/images/rl.png" alt="" class="icon_rl"> -->
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">City</span>
                <div class="input_box item_right city_box">
                    <!-- <input type="text" v-model="query.city">
                    <img src="../../assets/images/loca.png" alt="" class="icon_loc"> -->
                    <van-area title="标题" :area-list="areaList" value="110101" @change="change" />
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Profession</span>
                <div class="input_box item_right">
                    <input type="text" v-model="query.profession">
                </div>
            </div>
      </div>
      <div class="confirm">Confirm</div>
  </div>
</template>
<script>
import {post,get} from '@/api/axios.js'
import {getToken} from '@/utils/auth.js' 
import {formatDate} from '@/utils/common.js'
import areaList from '@/utils/area.js';
import Vue from 'vue';
import { Area } from 'vant'; 
Vue.use(Area);
import 'vant/lib/area/style';
export default{
    data(){
        return{
            // radio: 1,
            avtar:'',
            onFocus:false,
            areaList:areaList,
            query:{
                user_token:getToken(),
                head_img_id:'',
                email:'',
                username:'',
                sex:1,//性别 1:男 2:女 3:其他
                birth:'',
                city:'',
                profession:''
            }
        }
    },
    created () {
        this.getUserInfo()
    },
    methods: {
        getUserInfo(){
            let query = {
                user_token:getToken()
            }
            post('user/getuserinfo',query).then(res=>{
                if(res.code == 0){
                    this.query.username = res.data.username
                    this.query.email = res.data.email
                    this.avtar = res.data.avtar
                    
                }
            })
        },
        changeRadio(val){
            console.log(val,"989898989")
        },
        editName(){
            this.query.username = ''
            this.$nextTick( () =>{
                this.$refs.gain.focus()
            })
        },
        change(){
            console.log("7878787878")
        },
        submit(){
            this.query.birth = formatDate(this.query.birth)
        }
    }
}
</script>
<style lang="less">
@import url("../../assets/css/mine.less");
.el-radio__input.is-checked .el-radio__inner{
    border-color:  #FD6A6C!important;
    background-color:  #FD6A6C!important;
  }
  .el-radio__input.is-checked+.el-radio__label{
    color: #FD6A6C;
  }
  .el-input__icon.el-icon-date{
    /* display: none; */
    color:#fF0000;
  }
  .el-input__inner{
      height:0.4rem;
      border:none;
      padding:0 0.2rem;
  }
  .el-input--prefix .el-input__inner{
      padding:0;
  }
  .el-input__icon{
      line-height:0.4rem;
  }
  .el-input__prefix{
    right:0;
    left:90%;
  }
  .city_box{
      position: relative!important;
  }
  .van-picker.van-area{
    position: absolute!important;
    top:100%!important;
    left:0!important;
  }
</style>