<template>
  <div class="profile">
      <div class="color_red font18 font_bold title text_left">Profile Date</div>
      <div class="file_form font12">
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Avatar</span>
                <div class="item_right ava_flex">
                    <img :src="avtar" alt="" class="icon_avatar">
                    <span class="color_red mr2">change</span>
                    <el-upload
                      class="avatar-uploader"
                      :action="actionUrl"
                      :limit='1'
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      >
                      <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
                      <i class="el-icon-edit color_red"></i>
                    </el-upload>
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
                <div class="input_box item_right g_b_w">
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
                <div class="input_box item_right g_b_w">
                    <!-- <div class="city_box">
                        <div style="overflow: hidden" class="flex">
                          <div class="select-l g-f-l">
                            <select v-model="selected" v-if="provinceL" class="select-box t-city">
                              <option value="" label="">请选择省</option>
                              <option v-for="(item,index) in provinceL" :value="item">{{ item.name }}</option>
                            </select>
                          </div>
                          <div class="select-l g-f-l g-ml-5">
                            <select v-model="citySelected" v-if="cityL" class="select-box t-city">
                              <option value="">请选择市</option>
                              <option v-for="(item,index) in cityL" :value="item">{{ item.name }}</option>
                            </select>
                          </div>
                          <div class="select-l g-f-l g-ml-5">
                            <select v-model="areaSelected" v-if="areaL" class="select-box t-city">
                              <option value="">请选择区县</option>
                              <option v-for="(item,index) in areaL" :value="item">{{ item.name }}</option>
                            </select>
                          </div>
                          <div v-show="notice.province">请选择{{ provinceMsg }}</div>
                        </div>
                        <a href="javascript:;" @click="submitCity()">提交</a>
                    </div> -->
                    <input type="text"  v-model="query.profession">
                </div>
            </div>
            <div class="flex flexAlignCenter form_item">
                <span class="item_name">Profession</span>
                <div class="input_box item_right g_b_w">
                    <input type="text" v-model="query.city">
                </div>
            </div>
      </div>
      <div class="confirm cli_pointer" @click="submit">Confirm</div>
  </div>
</template>
<script> 
import {post,get} from '@/api/axios.js'
import {getToken} from '@/utils/auth.js' 
import {formatDate} from '@/utils/common.js'
import { province, city, area } from '@/utils/area.js';
export default{
    name: "city",
    data(){
        return{
            // radio: 1,
            actionUrl:'https://www.amzshop-us.uk/api.php/common/picture_upload',
            dialogVisible: false,
            avtar:'',
            onFocus:false,
            query:{
                user_token:getToken(),
                head_img_id:'',
                email:'',
                username:'',
                sex:1,//性别 1:男 2:女 3:其他
                birth:'',
                city:'',
                profession:''
            },
            selected: '',
            citySelected: '',
            areaSelected: '',
            provinceL: [],
            cityL: [],
            areaL: [],
            selectedData: '',
            citySelectedData: '',
            areaSelectedData: '',
            provinceMsg:'',
            notice:{
                province:false
            },
        }
    },
    mounted () {
        this.provinceL = [...province] /*取出省市数据*/
    },
    created () {
        this.getUserInfo()
    },
    watch: {
        selected: function () {
        // 清除区县
            this.citySelected = {}
            this.cityL = city.filter((item) => item.parentId == this.selected.code)
            for (const i in this.cityL) {
                if (this.cityL[i].code == this.citySelectedData && this.cityL[i].parentId == this.selected.code) {
                this.citySelected = this.cityL[i]
                }
            }
        },
        citySelected: function () {
            this.areaSelected = {}
            if (this.citySelected){
                this.areaL = area.filter((item) => item.parentId === this.citySelected.code)
            }
            for (const i in this.areaL) {
                if (this.areaL[i].code == this.areaSelectedData && this.areaL[i].parentId == this.citySelected.code) {
                this.areaSelected = this.areaL[i]
                }
            }
        }
    },
    methods: {
        /*从后台获取用户提交的省市区信息*/
        getCity(addr) {
            this.citySelectedData = addr.City
            this.areaSelectedData = addr.County
            for (const i in this.provinceL) {
                if (Number(addr.Province) == this.provinceL[i].code) {
                this.selectedData = this.provinceL[i].name
                this.selected = this.provinceL[i]
                }
            }
        },
        submitCity() {
            /*市默认显示第一个时*/
            /*if (this.province == ''){
                alert("请选择地址")
                return
            }*/
            /*没有默认选择时*/
            if (this.selected == '') {
                this.notice.province = true
                this.provinceMsg = '省'
                return
            }else {
                this.notice.province = false
            }
            if (this.citySelected == undefined) {
                this.notice.province = true
                this.provinceMsg = '市'
                return
            }else {
                this.notice.province = false
            }
            if (this.areaSelected == undefined) {
                this.notice.province = true
                this.provinceMsg = '区县'
                return
            }else {
                this.notice.province = false
            }
            console.log('提交成功')
        },
        handleAvatarSuccess(res, file) {
            console.log(res,"res")
            this.avtar = URL.createObjectURL(file.raw);
            console.log(this.avtar,"77777777")
            this.query.head_img_id = res.data.id
        },
        getUserInfo(){
            let query = {
                user_token:getToken()
            }
            post('user/getuserinfo',query).then(res=>{
                if(res.code == 0){
                    this.query.username = res.data.username
                    this.query.email = res.data.email
                    this.query.city = res.data.city
                    this.query.birth = res.data.birth
                    this.query.sex = res.data.sex
                    this.query.profession = res.data.profession
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
        submit(){
            if(this.val()){
                this.query.birth = formatDate(this.query.birth)
                post('user/up_userinfo',this.query).then(res=>{
                    if(res.code == 0){
                        this.$message({
                            message:"编辑成功!",
                            type:'success',
                            center:true,
                            duration:1000
                        })
                        
                    }
                })
            }
            
        },
        val(){
            if(this.query.head_img_id == ''){
                this.$message('请上传头像!')
                return;
            }
            if(this.query.email == ''){
                this.$message('请填写邮箱头像!')
                return;
            }
            if(this.query.username == ''){
                this.$message('请填写用户名!')
                return;
            }
            if(this.query.birth == ''){
                this.$message('请选择生日!')
                return;
            }
            if(this.query.city == ''){
                this.$message('请填写所在地区!')
                return;
            }
            if(this.query.profession == ''){
                this.$message('请填写职业!')
                return;
            }
            return true;
        }
    }
}
</script>
<style lang="less">
@import url("../../assets/css/mine.less");
    input{
        padding:0!important;
    }
    
.el-radio__input.is-checked .el-radio__inner{
    border-color:  #FD6A6C!important;
    background-color:  #FD6A6C!important;
  }
  .el-radio__input.is-checked+.el-radio__label{
    color: #FD6A6C!important;
  }
  .el-input__icon.el-icon-date{
    /* display: none; */
    color:#fF0000;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
      width:100%!important;
  }
  .el-input__inner{
      height:0.4rem!important;
      border:none!important;
      width:100%!important;
      padding:0 0.2rem!important;
  }
  .el-input--prefix .el-input__inner{
      padding:0!important;
  }
  .el-input__icon{
      line-height:0.4rem!important;
  }
  .el-input__suffix-inner{
      display: none!important;
  }
  .el-input__prefix{
    right:0!important;
    left:90%!important;
  }
  .city_box{
     display: flex!important;
  }
  .el-upload.el-upload--picture-card{
    width:0.8rem;height:0.8rem;border-radius:50%;
    border:none;
    display: flex;justify-content: center;align-items: center;
  }
  .el-upload--picture-card i{
      font-size:0.25rem!important;
  }
  .icon_avatar{
      margin-right:0.2rem!important;
  }
  .g_b_w{
      width:35%!important;
  }
  .p0{
      padding:0!important;
  }



  .g-f-l{
    float: left;
    }
    .g-ml-5 {
    margin-left: 0.05rem;
    }
    .city-box{
        width: 1200px;
        margin: 0 auto;
        margin-top: 200px;
    }
    .select-box{
        width: 1.2rem;
        height: 0.4rem;line-height: 0.4rem;
        border:1px solid #E4ECFA;
        margin-right:0.3rem;
        padding:0 0.2rem;
        outline: none;
    }
    
</style>