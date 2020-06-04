<template>
    <div class="common_head flex flexAlignCenter justifyContentBetween font_bold">
        <div class="nav_left flex flexAlignCenter">
            <div class="flex flexAlignCenter">
                <img src="../assets/images/logo.png" alt="" class="logo">
                <span class="logo_brand font_bold">VIPON</span>
            </div>
            <div class="flex ml6">
                <div>
                  <img src="../assets/images/cai.png" alt="" class="icon_menu">
                  <span class="">CATEGORIES</span>
                </div>
                <div class="ml5">DEALS</div>
                <div class="nav_active ml5">VIP</div>
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
            <div class="sell_center ml2 font12">Seller Center</div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less">
  @import url("../assets/css/nav.less");
  .el-dropdown{
    font-size:0.16rem;
  }
  .el-icon-caret-bottom{
      margin-left:0.3rem;
  }
</style>