<template>
  <div class="favoite">
      <div class=" title text_left flex">
        <div class="color_red font18 font_bold ">Favorites</div>
        <div class="flex flexAlignCenter">
          <el-dropdown class="elem_drop cli_pointer"
            placement="bottom-start" @command="handleCommand">
              <span class="el-dropdown-link">
                {{cate}}
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="level_main">
                <el-dropdown-item :command="ell.id" v-for="(ell,key) in cateList" :key="key">{{ell.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          <div class="clear_btn cli_pointer" @click="initData">Clear All Expire</div>
        </div>
      </div>
      <div v-if="favoriteList.length>0">
        <!--分类列表-->
        <proItem :data="favoriteList" @emitCode="getCode"  @success="toDetail"></proItem>
        <div class="block mt5">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="query.page"
            :page-size="query.list_rows"
            layout="prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
      <div v-else class="font16 nodata font_bold">暂无数据</div>
  </div>
</template>
<script>
  import {post,get} from '@/api/axios.js'
  import {getToken} from '@/utils/auth.js'
  import proItem from '../../components/proitem.vue';
  export default{
      data(){
          return{
            radio: 3,
            currentPage3: 1,
            total:0,
            favoriteList:[],
            cate:'chose cate',
            cateList:[],//分类
            query:{
              user_token:getToken(),
              list_rows:5,
              page:1,
              cate_id:''
            }
          }
      },
      components:{
        proItem,
      },
      watch: {
        $route(){
          this.innerGetContent()
        }
      },
      created () {
        this.getcateList()
        this.innerGetContent()
      },
      methods:{
        toDetail(id){
            this.$router.push({
                path:'/detail',
                query:{
                    id:id
                }
            })
        },
        getCode(argument){
          // console.log(argument,"item")
          this.$router.push({
            name:'coupon',
            params:{
              id:argument[0],
              befor_price:argument[1],
              currency_price:argument[2],
              amzUrl:argument[3]
            }
          })
        },
        initData(){
          this.query = {
              user_token:getToken(),
              list_rows:5,
              page:1,
              cate_id:''
          }
          this.cate = 'chose cate'
          this.favoriteList = []
          this.getFavoritetList()
        },
        //点击子菜单筛选
        handleCommand(event){
          // console.log(event,"lllll")
          this.query.cate_id = event
          this.cateList.map(item=>{
            if(item.id == event){
              this.cate = item.name
              this.favoriteList = []
              this.getFavoritetList()
            }
          })
        },
        async getcateList(){
          try{
            const res = await post('goods/goods_cate_list')
            if(res.code == 0){
                this.cateList = res.data
            }
          }catch(err){

          }
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.$router.push({
            path: "mine/like",
            query:{
              page:val,//访问页码
              list_rows:this.comquery.list_rows,
              type:1,
            }
          });
        },
        innerGetContent() {
          let pramas = this.$route.query;
          if (pramas.list_rows) {
            this.query.list_rows = parseInt(pramas.list_rows)
          }
          if (pramas.page) {
            this.query.page = parseInt(pramas.page)
          } else {
            this.query.page = 1
          }
          this.getFavoritetList()
        },
        getFavoritetList(){
          post('goods/favorite_list',this.query).then(res=>{
            if(res.code == 0){
              this.favoriteList = res.data.data
            }
          })
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
  .nodata{
    height:calc(100vh - 0.89rem - 0.6rem);
    box-sizing: border-box;
    padding-top:2rem;
  }
</style>