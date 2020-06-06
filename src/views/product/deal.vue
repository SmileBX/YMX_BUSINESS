<template>
  <div class="deal">
      <!--头部筛选-->
      <div class="show_mobile">
          <div class="text_right pw2">
            <el-button @click="drawer = true" type="primary" class="el_ify">
              设置筛选
            </el-button>
        </div>
        <el-drawer
          :visible.sync="drawer"
          :with-header="false">
          <div class="flex justifyContentBetween font14 flexColumn">
            <div class="flex justifyContentBetween el_column">
                <div class="flex flexAlignStart justifyContentBetween el_column border">
                    <div class="line5">PRICE</div>
                    <div class="flex">
                        <div class="flex flexAlignCenter input_uu">
                            <span>$</span>
                            <input type="text" class="input_num">
                        </div>
                        <div class="fh">-</div>
                        <div class="flex flexAlignCenter input_uu">
                            <span>$</span>
                            <input type="text" class="input_num">
                        </div>
                        <div class="go_btn">GO</div>
                    </div>
                </div>
                <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">DISCOUNT</div>
                  <div class="flex flexAlignEnd"> 
                    <span>All Discounts</span> 
                    <span class="color_active d2 ml1"></span>
                  </div>
                </div>
                <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">FULFILLMENT</div>
                  <div class="flex flexAlignEnd"> 
                    <span>All</span> 
                    <span class="color_active d2 ml3"></span>
                  </div>
                </div>
                <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">STATUS</div>
                  <div class="flex flexAlignEnd"> 
                    <span>Instant Deals</span> 
                    <span class="color_active d2 ml1"></span>
                  </div>
                </div>
                <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">CATEGORY</div>
                  <div class="flex flexAlignEnd"> 
                    <span>All Categories</span> 
                    <span class="color_active d2 ml1"></span>
                  </div>
                </div>
                <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">SORTING</div>
                  <div class="flex flexAlignEnd"> 
                    <span>Default Rank</span> 
                    <span class="color_active d2 ml1"></span>
                  </div>
                </div>
            </div>
            <div class="font14 color_red reset mt5">RESET ALL</div>
          </div>
        </el-drawer>
      </div>
      <div class="flex justifyContentBetween deal_head">
          <div class="flex justifyContentBetween flex1">
              <div class="flex flexAlignStart flexColumn justifyContentBetween">
                  <div class="line5">PRICE</div>
                  <div class="flex">
                      <div class="flex flexAlignCenter input_uu">
                          <span>$</span>
                          <input type="text" class="input_num">
                      </div>
                      <div class="fh">-</div>
                      <div class="flex flexAlignCenter input_uu">
                          <span>$</span>
                          <input type="text" class="input_num">
                      </div>
                      <div class="go_btn">GO</div>
                  </div>
              </div>
              <div class="flex flexAlignStart flexColumn justifyContentBetween">
                <div class="line5">DISCOUNT</div>
                <div class="flex flexAlignEnd"> 
                  <span>All Discounts</span> 
                  <span class="color_active d2 ml1"></span>
                </div>
              </div>
              <div class="flex flexAlignStart flexColumn justifyContentBetween">
                <div class="line5">FULFILLMENT</div>
                <div class="flex flexAlignEnd"> 
                  <span>All</span> 
                  <span class="color_active d2 ml3"></span>
                </div>
              </div>
              <div class="flex flexAlignStart flexColumn justifyContentBetween">
                <div class="line5">STATUS</div>
                <div class="flex flexAlignEnd"> 
                  <span>Instant Deals</span> 
                  <span class="color_active d2 ml1"></span>
                </div>
              </div>
              <div class="flex flexAlignStart flexColumn justifyContentBetween">
                <div class="line5">CATEGORY</div>
                <div class="flex flexAlignEnd"> 
                  <span>All Categories</span> 
                  <span class="color_active d2 ml1"></span>
                </div>
              </div>
              <div class="flex flexAlignStart flexColumn justifyContentBetween">
                <div class="line5">SORTING</div>
                <div class="flex flexAlignEnd"> 
                  <span>Default Rank</span> 
                  <span class="color_active d2 ml1"></span>
                </div>
              </div>
          </div>
          <div class="font14 color_red reset">RESET ALL</div>
      </div>
      <!--分类列表-->
      <proItem ></proItem>
  </div>
</template>
<script>
import proItem from '../../components/proitem.vue';
export default{
  data(){
    return{
      drawer: false,
    }
  },
  components:{
    proItem,
  }
}
</script>
<style lang="less">
@import url("../../assets/css/product.less");
</style>