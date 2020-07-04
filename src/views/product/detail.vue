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
                          <span class="ml1">Listing expires In <span class="color_red">{{days}} days</span></span>
                      </div>
                      <div class="flex flexAlignCenter">
                          <img src="../../assets/images/11.png" alt="" class="icon_img" v-if="info.is_fabulous==0 || info.is_fabulous==2" @click="zan">
                          <img src="../../assets/images/dzs.png" alt="" class="icon_img" v-if="info.is_fabulous==1">
                          <img src="../../assets/images/13.png" alt="" class="icon_img" v-if="info.is_favorite==0" @click="collect">
                          <img src="../../assets/images/14.png" alt="" class="icon_img" v-if="info.is_favorite==1" @click="collect">
                          <img src="../../assets/images/12.png" alt="" class="icon_img" v-if="info.is_fabulous==0 ||　info.is_fabulous==1" @click="cai">
                          <img src="../../assets/images/15.png" alt="" class="icon_img" v-if="info.is_fabulous==2">
                          <!-- <span class="color_red font12">{{info.fabulous_count}}</span> -->
                          
                          <!-- <span class="font12">{{info.review}}</span> -->
                          <!-- <img src="../../assets/images/12.png" alt="" class="icon_img" :class="{'icon_active':info}"> -->
                          <!-- <span class="font12">{{info.step_count}}</span> -->
                      </div>
                  </div>
                  <div class="flex  flexAlignEnd">
                      <div class="font22 font_bold color_blood">${{info.currency_price}}</div>
                      <div class="flex  ml3">
                          <div class="text_through font14">${{info.price}}</div>
                          <div class="color_blood font14 ml1">{{100-info.discount}}% Discount</div>
                      </div>
                  </div>
                  <div class="get_cou  font18 cli_pointer" @click="getCode">Get Coupon</div>
                  <div class="flex ">
                      <img src="../../assets/images/bq.png" alt="" class="icon_bq">
                      <span class="font14 text_left">This coupon code can be applied to all variations of this product.</span>
                  </div>
                  <div class="font12 color_9 mt3 text_left ">The descriptions and pictures of products on Vipon are for reference only. Please fully view the product listing on Amazon before purchasing.</div>
                  <div class="font14 detail_about">About the product</div>
                  <div class="pro_mention  font14 text_left "> 
                    3D Stereo Sound & Bluetooth 5.1 Bluetooth wireless earphones with noise cancelling, you can shield surrounding noises, enjoy your music everywhere even in a loud environment. Wireless earbuds adopt the most advanced Bluetooth 5.1
                  </div>
                  <div class="open_ama cli_pointer" @click="openAmz">Open in Amazon</div>
              </div>
          </div>
          <!-- <div class="flex justifyContentBetween mt5">
              <div class="img_left">
                  <img src="" alt="">
                  <img src="../../assets/images/x.png" alt="" class="del_icon">
              </div>
              <div class="img_right">
                <img src="" alt="">
                <img src="../../assets/images/x.png" alt="" class="del_icon">
              </div>
          </div> -->
          <div class="flex justifyContentAround mt4" v-if="!query.user_token">
              <div class="flex flexAlignCenter detail_new_left">
                  <img src="../../assets/images/logo.png" alt="" class="logo">
                  <div class="font14 ml2 text_left"><span class="color_blood">Log in </span>or<span class="color_blood"> Sign up</span>for a Vipon account to post comment</div>
              </div>
              <div class="flex">
                  <span class="btn_sign sign_in cli_pointer" @click="signBtn(1)">Log In</span>
                  <span class="btn_sign sign_up cli_pointer" @click="signBtn(2)">Sign Up</span>
              </div>
          </div>
          <div class="comments" v-if="commentList.length>0">
              <div class="title font18 text_left">Comments</div>
              <div class="list">
                  <div class="coment_item flex justifyContentBetween flexAlignCenter" v-for="(item,index) in commentList" :key="index">
                      <div class="flex flexAlignCenter flex1">
                          <img :src="item.avtar" alt="" class="logo bor_radius">
                          <div class="flex1 ml2 flex flexAlignCenter">
                              <div class="flex">
                                  <span>{{item.user_name}}</span>
                                  <img src="../../assets/images/happy.png" alt="" class="icon_face" v-if="item.type==1">
                                  <img src="../../assets/images/normal.png" alt="" class="icon_face" v-if="item.type==2">
                                  <img src="../../assets/images/upset.png" alt="" class="icon_face" v-if="item.type==3">
                              </div>
                              <div class="text_flow1 font12 ml2">{{item.content}}</div>
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
          <div class="coment_menu mt2" v-if="query.user_token">
              <div class="flex flexAlignStart">
                  <img :src="userInfo.avtar" alt="" class="avater">
                  <div class="flex flexColumn flex1 ml3 flexAlignStart">
                    <span>My Comment</span>
                    <input type="text" class="com_input" v-model="content">
                    <div class="flex flexAlignCenter justifyContentBetween com_facegroup mt2">
                        <div>
                            <div class="flex">
                              <div class="img_box" @click="changeFace(1)" :class="{'active':active==1}">
                                <img src="../../assets/images/happy_w.png" alt="" class="icon_face1" v-if="active==1">
                                <img src="../../assets/images/happy.png" alt="" class="icon_face1" v-else>
                              </div>
                              <div class="img_box" @click="changeFace(2)" :class="{'active':active==2}">
                                <img src="../../assets/images/normal_w.png" alt="" class="icon_face1" v-if="active==2">
                                <img src="../../assets/images/normal.png" alt="" class="icon_face1" v-else>
                              </div>
                              <div class="img_box" @click="changeFace(3)" :class="{'active':active==3}">
                                <img src="../../assets/images/upset_w.png" alt="" class="icon_face1" v-if="active==3">
                                <img src="../../assets/images/upset.png" alt="" class="icon_face1" v-else>
                              </div>
                            </div>
                            <!-- <div class="flex mt2">
                              <div class="img_box active">
                                <img src="../../assets/images/happy_w.png" alt="" class="icon_face1">
                              </div>
                              <div class="img_box active">
                                <img src="../../assets/images/normal_w.png" alt="" class="icon_face1">
                              </div>
                              <div class="img_box active">
                                <img src="../../assets/images/upset_w.png" alt="" class="icon_face1">
                              </div>
                            </div> -->
                        </div>
                        <div class="btn_post cli_pointer" @click="Comment">Post Comment</div>
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
              id:''
            },
            commentList:[],
            total:0,
            active:1,
            days:0,
            content:''//评论内容
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
          this.comquery.id = this.query.id = this.$route.query.id
          this.getDetail()
          this.innerGetContent()
        }
      },
      methods:{
        //查看折扣
        getCode(){
          this.$router.push({
            name:'coupon',
            params:{
              id:this.query.id,
              befor_price:this.info.price,
              currency_price:this.info.currency_price,
              amzUrl:this.info.amazon_url
            }
          })
        },
        getCommentList(){
          post('goods/goods_comment_list',this.comquery).then(res=>{
            if(res.code == 0){
              this.commentList = res.data.data
              this.total = res.data.total
            }
          })
        },
        innerGetContent() {
          let pramas = this.$route.query;
          if (pramas.list_rows) {
            this.comquery.list_rows = parseInt(pramas.list_rows)
          }
          if (pramas.id) {
            this.comquery.id = parseInt(pramas.id)
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
              id:this.query.id,
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
              let minTimes = res.data.end_time - res.data.start_time
              if(minTimes>0){
                this.days  = (minTimes / 1000 / 60 / 60 / 24).toFixed(2);
              }else{
                this.dasys =  0
              }
              
            }
          })
        },
        toDetail(id){
          // console.log(id,"lllll")
          this.$router.push({
                path:'/detail',
                query:{
                    id:id
                }
            })
        },
        //登录或者是注册
        signBtn(key){
          let path;
          key==1?path='/login':path='/register'
          this.$router.push(path)
        },
        //评论选择表情
        changeFace(tt){
          this.active = tt
        },
        //发表腈纶
        Comment(){
          let query = {
            user_token:getToken(),
            type:this.active,
            content:this.content,
            goods_id:this.query.id
          }
          post('/goods/goods_comment',query).then(res=>{
            if(res.code == 0){
              this.$message({
                message:res.msg,
                type:'success'
              })
              this.getCommentList()
              this.content = ''
            }
          })
        },
        zan(){
          let query = {
            user_token:getToken(),
            type:1,
            id:this.query.id
          }
          post('goods/add_sheet',query).then(res=>{
            if(res.code == 0){
              this.$message({
                message:res.msg,
                type:'success'
              })
              this.info.is_fabulous=1
            }
          })
        },
        cai(){
          let query = {
            user_token:getToken(),
            type:2,
            id:this.query.id
          }
          post('goods/add_sheet',query).then(res=>{
            if(res.code == 0){
              this.$message({
                message:res.msg,
                type:'success'
              })
              this.info.is_fabulous=2
            }
          })
        },
        collect(){
          let query = {
            user_token:getToken(),
            goods_id:this.query.id
          }
          post('goods/add_collect',query).then(res=>{
            if(res.code == 0){
              this.$message({
                message:res.msg,
                type:'success'
              })
              if(this.info.is_favorite==1){
                this.info.is_favorite = 0
              }else{
                this.info.is_favorite = 1
              }
            }
          })
        },
        openAmz(){
          window.open(this.info.amazon_url,"_blank")
        }
        
      }
  }
</script>
<style lang="less">
@import url("../../assets/css/product.less");

</style>