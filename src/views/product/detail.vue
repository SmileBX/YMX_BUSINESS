<template>
    <div>
      <div class="detail">
          <div class="flex detail_head">
              <div class="detail_img">
                  <img src="../../assets/images/pic.png" alt="">
              </div>
              <div class="flex flexColumn flex1 ml2 flexAlignStart justifyContentBetween">
                  <div class="text_flow title font_bold ">Wireless Earbuds Bluetooth 5.1 Headphones, pendali IPX7 Waterproof Earbuds with Deep Bass, Auto Pairing, Mini Portable Charging Case, Touch Earbuds in...</div>
                  <div class="flex font14 mt2 justifyContentBetween w100">
                      <div class="flex flexAlignCenter">
                          <img src="../../assets/images/time.png" alt="">
                          <span class="ml1">Listing expires In <span class="color_red">6days</span></span>
                      </div>
                      <div class="flex flexAlignCenter">
                          <img src="../../assets/images/zan_t.png" alt="" class="icon_img">
                          <span class="color_red font12">268</span>
                          <img src="../../assets/images/comment.png" alt="" class="icon_img">
                          <span class="font12">128</span>
                          <img src="../../assets/images/zan_d.png" alt="" class="icon_img">
                          <span class="font12">12</span>
                      </div>
                  </div>
                  <div class="flex  flexAlignEnd">
                      <div class="font22 font_bold color_blood">$15.99</div>
                      <div class="flex  ml3">
                          <div class="text_through font14">$31.99</div>
                          <div class="color_blood font14 ml1">50% Discount</div>
                      </div>
                  </div>
                  <div class="get_cou  font18">Get Coupon</div>
                  <div class="flex ">
                      <img src="../../assets/images/bq.png" alt="" class="icon_bq">
                      <span class="font14 text_left">This coupon code can be applied to all variations of this product.</span>
                  </div>
                  <div class="font12 color_9 mt3 text_left ">The descriptions and pictures of products on Vipon are for reference only. Please fully view the product listing on Amazon before purchasing.</div>
                  <div class="font14 detail_about">About the product</div>
                  <div class="pro_mention  font14 text_left "> 
                    3D Stereo Sound & Bluetooth 5.1 Bluetooth wireless earphones with noise cancelling, you can shield surrounding noises, enjoy your music everywhere even in a loud environment. Wireless earbuds adopt the most advanced Bluetooth 5.1
                  </div>
                  <div class="open_ama">Open in Amazon</div>
              </div>
          </div>
          <div class="flex justifyContentBetween mt5">
              <div class="img_left">
                  <img src="" alt="">
                  <img src="../../assets/images/x.png" alt="" class="del_icon">
              </div>
              <div class="img_right">
                <img src="" alt="">
                <img src="../../assets/images/x.png" alt="" class="del_icon">
              </div>
          </div>
          <div class="flex justifyContentAround mt4">
              <div class="flex flexAlignCenter detail_new_left">
                  <img src="../../assets/images/logo.png" alt="" class="logo">
                  <div class="font14 ml2 text_left"><span class="color_blood">Log in </span>or<span class="color_blood"> Sign up</span>for a Vipon account to post comment</div>
              </div>
              <div class="flex">
                  <span class="btn_sign sign_in">Log In</span>
                  <span class="btn_sign sign_up">Sign Up</span>
              </div>
          </div>
          <div class="comments">
              <div class="title font18 text_left">Comments</div>
              <div class="list">
                  <div class="coment_item flex justifyContentBetween flexAlignCenter" v-for="(item,index) in 6" :key="index">
                      <div class="flex flexAlignCenter flex1">
                          <img src="../../assets/images/logo.png" alt="" class="logo">
                          <div class="flex1 ml2">
                              <div class="flex">
                                  <span>Vision_177369</span>
                                  <img src="../../assets/images/happy.png" alt="" class="icon_face">
                                  <!-- <img src="../../assets/images/normal.png" alt="" class="icon_face">
                                  <img src="../../assets/images/upset.png" alt="" class="icon_face"> -->
                              </div>
                              <div class="text_flow1 font12">Every time I press for it to open in Amazon it won’t put the code in I don’t know if I’m doing something wrong let me know how to do this</div>
                          </div>
                      </div>
                      <div class="font14 color_9 item_time">2020-06-06 09:04</div>
                  </div>
                  <div class="block mt5">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage3"
                      :page-size="5"
                      layout="prev, pager, next, jumper"
                      :total="12">
                    </el-pagination>
                  </div>
              </div>
          </div>
          <!---评价操作-->
          <div class="coment_menu">
              <div class="flex flexAlignStart">
                  <img src="../../assets/logo.png" alt="" class="avater">
                  <div class="flex flexColumn flex1 ml3 flexAlignStart">
                    <span>My Comment</span>
                    <input type="text" class="com_input">
                    <div class="flex flexAlignCenter justifyContentBetween com_facegroup mt2">
                        <div>
                            <div class="flex">
                              <div class="img_box">
                                <img src="../../assets/images/happy.png" alt="" class="icon_face1">
                              </div>
                              <div class="img_box">
                                <img src="../../assets/images/normal.png" alt="" class="icon_face1">
                              </div>
                              <div class="img_box">
                                <img src="../../assets/images/upset.png" alt="" class="icon_face1">
                              </div>
                            </div>
                            <div class="flex mt2">
                              <div class="img_box active">
                                <img src="../../assets/images/happy_w.png" alt="" class="icon_face1">
                              </div>
                              <div class="img_box active">
                                <img src="../../assets/images/normal_w.png" alt="" class="icon_face1">
                              </div>
                              <div class="img_box active">
                                <img src="../../assets/images/upset_w.png" alt="" class="icon_face1">
                              </div>
                            </div>
                        </div>
                        <div class="btn_post">Post Comment</div>
                    </div>
                  </div>
              </div>
          </div>
          <div class="pro_ui">
              <div class="tuijian">You May Also Like :</div>
              <proItem></proItem>
          </div>
      </div>
      <foot></foot>
    </div>
</template>
<script>
import proItem from '../../components/proitem.vue';
import foot from '../../components/foot.vue';
export default{
      data(){
          return{
            currentPage3: 1,
          }
      },
      components:{
        proItem,foot
      },
      methods:{
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      }
  }
</script>
<style lang="less">
@import url("../../assets/css/product.less");
</style>