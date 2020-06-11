<template>
    <div class="nav_head_fix">
      <div class="nav_show1">
        <div class="common_head flex flexAlignCenter justifyContentBetween font_bold ">
            <div class="nav_left flex flexAlignCenter">
                <div class="flex flexAlignCenter">
                    <img src="../assets/images/logo.png" alt="" class="logo">
                    <span class="logo_brand font_bold">VIPON</span>
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
                <el-dropdown>
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
                </el-dropdown>
                <div class="flex flexAlignCenter ml2">
                    <input type="text" placeholder="Search Coupons & Deals" class="input_box font14">
                    <div class="search">
                      <img src="../assets/images/search.png" alt="" class="icon_search">
                    </div>
                </div>
            </div>
            <div class="nav_right flex flexAlignCenter font14">
                <img src="../assets/images/notice.png" alt="" class="icon_notice">
                <div class="flex ml2">
                    <img src="../assets/images/tx.png" alt="" class="icon_tx">
                    <div class="flex flexAlignCenter ml1">
                      <span class="font12">Vision_117...</span>
                      <img src="../assets/images/down.png" alt="" class="icon_down ml1">
                    </div>
                </div>
                <div class="sell_center ml2 font12" @click="mineCenter">Seller Center</div>
            </div>
        </div>
      </div>
      <div class="nav_show2">
        <div class="common_head2 flex flexAlignCenter justifyContentBetween font_bold ">
          <div class="nav_left flex flexAlignCenter">
              <div class="flex flexAlignCenter">
                  <img src="../assets/images/logo.png" alt="" class="logo">
                  <span class="logo_brand font_bold">VIPON</span>
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
              <el-dropdown>
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
              </el-dropdown>
              <div class="flex flexAlignCenter ml2">
                  <input type="text" placeholder="Search Coupons & Deals" class="input_box font14">
                  <div class="search">
                    <img src="../assets/images/search.png" alt="" class="icon_search">
                  </div>
              </div>
          </div>
          <div class="nav_right flex flexAlignCenter font14">
              <img src="../assets/images/tx.png" alt="" class="icon_tx">
              <div class="sell_center ml2 font12" @click="mineCenter">Seller Center</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  data(){
    return{
      navIndex:1,
    }
  },
  mounted () {
    this.navIndex = 1;
    this.$router.push('/home')
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
  },
  watch: {
    '$route':{
      handler(val,oldval){
        console.log(val);//新路由信息
        console.log(oldval);//老路由信息
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