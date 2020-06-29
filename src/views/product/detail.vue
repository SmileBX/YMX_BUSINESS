<template>
    <div>
      <div class="detail">
          <div class="flex detail_head">
              <div class="detail_img">
                  <img :src="info.image" alt="">
              </div>
              <div class="flex flexColumn flex1 ml2 flexAlignStart justifyContentBetween">
                  <div class="text_flow title font_bold ">{{info.name}}</div>
                  <div class="flex font14 mt2 justifyContentBetween w100">
                      <div class="flex flexAlignCenter">
                          <img src="../../assets/images/time.png" alt="">
                          <span class="ml1">Listing expires In <span class="color_red">6days</span></span>
                      </div>
                      <div class="flex flexAlignCenter">
                          <img src="../../assets/images/zan_t.png" alt="" class="icon_img">
                          <span class="color_red font12">{{info.fabulous_count}}</span>
                          <img src="../../assets/images/comment.png" alt="" class="icon_img">
                          <span class="font12">{{info.review}}</span>
                          <img src="../../assets/images/zan_d.png" alt="" class="icon_img">
                          <span class="font12">{{info.step_count}}</span>
                      </div>
                  </div>
                  <div class="flex  flexAlignEnd">
                      <div class="font22 font_bold color_blood">${{info.currency_price}}</div>
                      <div class="flex  ml3">
                          <div class="text_through font14">${{info.price}}</div>
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
          <div class="comments" v-if="commentList.length>0">
              <div class="title font18 text_left">Comments</div>
              <div class="list">
                  <div class="coment_item flex justifyContentBetween flexAlignCenter" v-for="(item,index) in commentList" :key="index">
                      <div class="flex flexAlignCenter flex1">
                          <img :src="item.avtar" alt="" class="logo">
                          <div class="flex1 ml2">
                              <div class="flex">
                                  <span>{{item.user_name}}</span>
                                  <img src="../../assets/images/happy.png" alt="" class="icon_face">
                                  <!-- <img src="../../assets/images/normal.png" alt="" class="icon_face">
                                  <img src="../../assets/images/upset.png" alt="" class="icon_face"> -->
                              </div>
                              <div class="text_flow1 font12">{{item.content}}</div>
                          </div>
                      </div>
                      <div class="font14 color_9 item_time">{{item.create_time}}</div>
                  </div>
                  <div class="block mt5">
                    <el-pagination
                      @current-change="handleCurrentChange"
                      :current-page.sync="comquery.page"
                      :page-size="comquery.list_rows"
                      layout="prev, pager, next, jumper"
                      :total="total">
                    </el-pagination>
                  </div>
              </div>
          </div>
          <!---评价操作-->
          <div class="coment_menu mt2">
              <div class="flex flexAlignStart">
                  <img :src="userInfo.avtar" alt="" class="avater">
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
              <proItem :data="alsoList" @success="toDetail"></proItem>
          </div>
      </div>
      <foot></foot>
    </div>
</template>
<script>
import proItem from '../../components/proitem.vue';
import foot from '../../components/foot.vue';
import {post,get} from '@/api/axios.js'
import {getToken} from '@/utils/auth.js'
export default{
      data(){
          return{
            currentPage3: 1,
            info:{},
            alsoList:[],
            userInfo:{},
            query:{
              id:'',
              user_token:getToken()
            },
            comquery:{
              list_rows:2,
              page:1,
              goods_id:''
            },
            commentList:[],
            total:0,
          }
      },
      created () {
        this.comquery.id = this.query.id = this.$route.query.id
        this.getDetail()
        this.getUserInfo()
        this.innerGetContent()
       
      },
      components:{
        proItem,foot
      },
      watch: {
        $route(){
          this.query.id = this.$route.query.id
          this.getDetail()
          this.innerGetContent()
        }
      },
      methods:{
        getCommentList(){
          post('goods/goods_comment_list',this.comquery).then(res=>{
            if(res.code == 0){
              this.commentList = res.data
              this.total = res.data.total
            }
          })
        },
        innerGetContent() {
          let pramas = this.$route.query;
          if (pramas.list_rows) {
            this.comquery.list_rows = parseInt(pramas.list_rows)
          }
          if (pramas.page) {
            this.comquery.page = parseInt(pramas.page)
          } else {
            this.comquery.page = 1
          }
          this.getCommentList()
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.$router.push({
            path: "/detail",
            query:{
              page:val,//访问页码
              list_rows:this.comquery.list_rows
            }
          });
        },
        getUserInfo(){
          this.$store.dispatch('userInfo',getToken()).then(res=>{
            if(res.code == 0){
              this.userInfo = res.data
            }
          })
        },
        getDetail(){
          post('goods/goods_detail',this.query).then(res=>{
            if(res.code == 0){
              this.info = res.data
              this.alsoList = res.data.also_like_list
            }
          })
        },
        toDetail(id){
          this.$router.push({
                path:'/detail',
                query:{
                    id:id
                }
            })
        },
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