<template>
    <div class="nav_head_fix">
      <div class="nav_show1">
        <div class="common_head flex flexAlignCenter justifyContentBetween font_bold ">
            <div class="nav_left flex flexAlignCenter">
                <div class="flex flexAlignCenter">
                    <img src="../assets/images/logo.png" alt="" class="logo">
                    <span class="logo_brand font_bold">AMZSHOP</span>
                </div>
                <div class="flex ml6">
                    <div @click="changeNav(1)" class="cli_pointer">
                      <img src="../assets/images/cai.png" alt="" class="icon_menu">
                      <span :class="{'nav_active':navIndex==1}">CATEGORIES</span>
                    </div>
                    <div class="ml5 cli_pointer" :class="{'nav_active':navIndex==2}" @click="changeNav(2)">DEALS</div>
                    <div class=" ml5 cli_pointer" :class="{'nav_active':navIndex==3}" @click="changeNav(3)">VIP</div>
                </div>
            </div>
            <div class="nav_center flex flexAlignCenter">
                <!-- <el-dropdown>
                  <span class="el-dropdown-link">
                    All<i class="el-icon-caret-bottom
                    "></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown> -->
                <div class="flex flexAlignCenter ml2">
                    <input type="text" placeholder="Search Coupons & Deals" class="input_box font14" v-model="search_data">
                    <div class="search">
                      <img src="../assets/images/search.png" alt="" class="icon_search" @click="searchData">
                    </div>
                </div>
            </div>
            <div class="nav_right flex flexAlignCenter font14">
                <img src="../assets/images/out.png" alt="" class="icon_notice" @click="logout">
                <div class="flex ml2 cli_pointer" @click="mineCenter" v-if="query.user_token">
                    <img :src="userInfo.avtar" alt="" class="icon_tx">
                    <div class="flex flexAlignCenter ml1">
                      <span class="font12">{{userInfo.username}}</span>
                      <img src="../assets/images/down.png" alt="" class="icon_down ml1">
                    </div>
                </div>
                <div class="flex ml2 cli_pointer" v-else>
                    <img src="../assets/images/tx.png" alt="" class="icon_tx">
                    <div class="flex flexAlignCenter ml1">
                      <span @click="toLog(1)"> Log in</span>
                        / 
                      <span @click="toLog(2)">Sign Up</span>
                    </div>
                </div>
                <div class="sell_center ml2 font12 cli_pointer" @click="ToBus">Seller Center</div>
            </div>
        </div>
      </div>
      <div class="nav_show2">
        <div class="common_head2 flex flexAlignCenter justifyContentBetween font_bold ">
          <div class="nav_left flex flexAlignCenter">
              <div class="flex flexAlignCenter">
                  <img src="../assets/images/logo.png" alt="" class="logo">
                  <span class="logo_brand font_bold">AMZSHOP</span>
              </div>
              <div class="flex ml6">
                  <el-dropdown>
                    <img src="../assets/images/cai.png" alt="" class="icon_menu">
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item @click="changeNav(1)" class="cli_pointer" :class="{'nav_active':navIndex==1}">
                        <div @click="changeNav(1)" class="cli_pointer" :class="{'nav_active':navIndex==1}" >CATEGORIES
                        </div>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <div class="cli_pointer" :class="{'nav_active':navIndex==2}" @click="changeNav(2)">DEALS</div>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <div class="cli_pointer" :class="{'nav_active':navIndex==3}" @click="changeNav(3)" >VIP</div>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
              </div>
          </div>
          <div class="nav_center flex flexAlignCenter">
              <!-- <el-dropdown>
                <span class="el-dropdown-link">
                  All<i class="el-icon-caret-bottom
                  "></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown> -->
              <div class="flex flexAlignCenter ml2" >
                  <input type="text" placeholder="Search Coupons & Deals" class="input_box font14" v-model="search_data">
                  <div class="search">
                    <img src="../assets/images/search.png" alt="" class="icon_search" @click="searchData">
                  </div>
              </div>
          </div>
          <div class="nav_right flex flexAlignCenter font14">
              <img src="../assets/images/tx.png" alt="" class="icon_tx cli_pointer" @click="mineCenter">
              <div class="sell_center ml2 font12 cli_pointer" @click="ToBus">Seller Center</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {post} from '@/api/axios.js'
import {getToken} from '@/utils/auth'
export default{
  data(){
    return{
      navIndex:1,
      query:{
        user_token:getToken()
      },
      userInfo:{},
      search_data:'',
    }
  },
  mounted () {
    this.search_data = ''
    
    // this.navIndex = 1;
    // this.$router.push('/home')
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    changeNav(i){
      this.navIndex = i;
      let urlPath = ''
      switch (i){
        case 1:
          urlPath = '/home';
          break;
        case 2:
          urlPath = '/deal';
          break;
        case 3:
          urlPath = '/introduce';
          break;
      }
      this.$router.push(urlPath)
    },
    mineCenter(){
      this.$router.push('/mine')
    },
    //搜索
    searchData(){
      // console.log(this.$route.path,"//////////")
      if(this.$route.path == '/deal'){
        this.$root.Bus.$emit('transKey',this.search_data)
      }else{
        this.$router.push('/deal')
       
         this.$root.Bus.$emit('transKey',this.search_data)
      }
    },//商家入驻
    ToBus(){
      //获取国内或者或外的域名连接
      post('goods/shop_url').then(res=>{
        if(res.code == 0){
          window.open(res.data,"_blank"); 
        }
      })
      // window.open('https://admin.amzshop-us.uk/',"_blank"); 
    },
    getUserInfo(){
      this.$store.dispatch('userInfo',this.query.user_token).then(res=>{
        if(res.code == 0){
              this.userInfo = res.data
        }else{
          this.query.user_token = ''
        }
      })
    },
    //注册登录
    toLog(tl){
      let path;
      tl==1?path='/login':path='/register'
      this.$router.push(path)
    },
    //退出登录
    logout(){
      this.$store.dispatch('loginOut').then(res=>{
        this.$router.push('/login')
      })
    }
  },
  watch: {
    '$route':{
      handler(val,oldval){
        // console.log(val.path,"666669999999");//新路由信息
        // console.log(oldval);//老路由信息
        if(val.path == '/home'){
          this.navIndex = 1
        }else if(val.path == '/deal' || val.path == '/detail'){
          this.navIndex = 2
        }else{
          this.navIndex = 3
        }
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>
<style lang="less">
  @import url("../assets/css/nav.less");
  .el-dropdown{
    font-size:0.16rem;
    text-align: left;
  }
  .el-icon-caret-bottom{
      margin-left:0.3rem;
  }
  
  .el-dropdown-menu.el-popper,.el-dropdown-menu__item{
    text-align: left;
  }
</style>