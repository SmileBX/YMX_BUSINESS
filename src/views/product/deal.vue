<template>
  <div class="deal">
      <!--头部筛选-->
      <div class="show_mobile">
          <div class="text_right pw2 margin_dd5">
            
            <el-button icon="el-icon-search" @click="drawer = true" circle>filter</el-button>
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
                            <input type="text" class="input_num" v-model="query.price">
                        </div>
                        <div class="fh">-</div>
                        <div class="flex flexAlignCenter input_uu">
                            <span>$</span>
                            <input type="text" class="input_num" v-model="query.price_second">
                        </div>
                        <div class="go_btn cli_pointer" @click="">GO</div>
                    </div>
                </div>
                <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">DISCOUNT</div>
                  <div class="flex flexAlignEnd cli_pointer"> 
                    <el-dropdown @command="handleChange">
                      <span class="el-dropdown-link">
                        {{level}}<i class="el-icon-caret-bottom color_red
                        "></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="tll.id" v-for="(tll,key) in levelList" :key="key">{{tll.us_title}}</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
                <!-- <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">FULFILLMENT</div>
                  <div class="flex flexAlignEnd"> 
                    <span>All</span> 
                    <span class="color_active d2 ml3"></span>
                  </div>
                </div> -->
                <!-- <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">STATUS</div>
                  <div class="flex flexAlignEnd"> 
                    <span>Instant Deals</span> 
                    <span class="color_active d2 ml1"></span>
                  </div>
                </div> -->
                <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">CATEGORY</div>
                  <div class="flex flexAlignEnd cli_pointer"> 
                    <el-dropdown @command="handleCommand">
                      <span class="el-dropdown-link">
                        {{cate}}<i class="el-icon-caret-bottom color_red
                        "></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="ell.id" v-for="(ell,key) in cateList" :key="key">{{ell.name}}</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
                <!-- <div class="flex flexAlignStart flexColumn justifyContentBetween mt5">
                  <div class="line5">SORTING</div>
                  <div class="flex flexAlignEnd"> 
                    <span>Default Rank</span> 
                    <span class="color_active d2 ml1"></span>
                  </div>
                </div> -->
            </div>
            <div class="font14 color_red reset mt5 cli_pointer" @click="initData">RESET ALL</div>
          </div>
        </el-drawer>
      </div>
      <div class="show_pc">
        <div class="flex justifyContentBetween deal_head">
            <div class="flex justifyContentBetween flex1">
                <div class="flex flexAlignStart flexColumn justifyContentBetween">
                    <div class="line5">PRICE</div>
                    <div class="flex">
                        <div class="flex flexAlignCenter input_uu">
                            <span>$</span>
                            <input type="text" class="input_num" v-model="query.price">
                        </div>
                        <div class="fh">-</div>
                        <div class="flex flexAlignCenter input_uu">
                            <span>$</span>
                            <input type="text" class="input_num" v-model="query.price_second">
                        </div>
                        <div class="go_btn cli_pointer" @click="setPrice">GO</div>
                    </div>
                </div>
                <div class="flex flexAlignStart flexColumn justifyContentBetween">
                  <div class="line5">DISCOUNT</div>
                  <div class="flex flexAlignEnd cli_pointer"> 
                    <el-dropdown @command="handleChange">
                      <span class="el-dropdown-link">
                        {{level}}<i class="el-icon-caret-bottom color_red
                        "></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="tll.id" v-for="(tll,key) in levelList" :key="key">{{tll.us_title}}</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
                <!-- <div class="flex flexAlignStart flexColumn justifyContentBetween">
                  <div class="line5">FULFILLMENT</div>
                  <div class="flex flexAlignEnd"> 
                    <span>All</span> 
                    <span class="color_active d2 ml3"></span>
                  </div>
                </div> -->
                <!-- <div class="flex flexAlignStart flexColumn justifyContentBetween">
                  <div class="line5">STATUS</div>
                  <div class="flex flexAlignEnd"> 
                    <span>Instant Deals</span> 
                    <span class="color_active d2 ml1"></span>
                  </div>
                </div> -->
                <div class="flex flexAlignStart flexColumn justifyContentBetween">
                  <div class="line5">CATEGORY</div>
                  <div class="flex flexAlignEnd cli_pointer"> 
                    <el-dropdown @command="handleCommand">
                      <span class="el-dropdown-link">
                        {{cate}}<i class="el-icon-caret-bottom color_red
                        "></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="ell.id" v-for="(ell,key) in cateList" :key="key">{{ell.name}}</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
                <!-- <div class="flex flexAlignStart flexColumn justifyContentBetween">
                  <div class="line5">SORTING</div>
                  <div class="flex flexAlignEnd"> 
                    <span>Default Rank</span> 
                    <span class="color_active d2 ml1"></span>
                  </div>
                </div> -->
            </div>
            <div class="font14 color_red reset cli_pointer" @click="initData">RESET ALL</div>
        </div>
      </div>
      <div v-if="hasData">
        <!--分类列表-->
        <proItem :data="list"></proItem>
      </div>
      <div v-else style="padding:2rem;margin:0 auto;text-align: center">暂无数据</div>
      
  </div>
</template>
<script>
import {post,get} from '@/api/axios.js'
import {getToken} from '@/utils/auth.js'
// import Cookies from "js-cookie";
import proItem from '../../components/proitem.vue';
export default{
  data(){
    return{
      drawer: false,
      hasData:false,//是否有列表数据
      query:{
        user_token:getToken(),
        list_rows:20,
        page:1,
        search_data:'',
        cate_id:'',//商品分类id
        level_id:'',//折扣id
        price:'',//开始价格
        price_second:'',//结束价格
      },
      cateList:[],//分类
      levelList:[],//折扣
      level:'All DISCOUNT',
      cate:'All Categories',
      total:0,
      list:[],
    }
  },
  created () {
    this.$emit('header', true);
    this.getcateList()
    this.getlevelList()
    
    let self = this
    this.$root.Bus.$on('transKey',function(key){
      self.query.search_data = key
      self.getList()
    })
    
    
  },
  components:{
    proItem,
  },
  methods: {
    
    getList(){
      post('goods/good_list',this.query).then(res=>{
        if(res.code == 0){
          if(res.data.total == 0){
            this.hasData = false
          }else{
            this.hasData = true
            this.list = res.data.data
          }
        }
      })
    },
    async getcateList(){
      const res = await post('goods/goods_cate_list')
      if(res.code == 0){
          this.cateList = res.data
      }
    },
    async getlevelList(){
      let query = {
        user_token:getToken()
      }
      const res = await post('goods/goods_level_list',query)
      if(res.code == 0){
          this.levelList = res.data
      }
    },
    handleCommand(event){
        // console.log(event,"lllll")
        this.query.cate_id = event
        this.cateList.map(item=>{
          if(item.id == event){
            this.cate = item.name
          }
        })
        this.getList()
      },
      handleChange(event){
        // console.log(event,"lllll")
        this.query.level_id = event
        this.levelList.map(item=>{
          if(item.id == event){
            this.level = item.us_title
          }
        })
        this.getList()
      },
      setPrice(){
        // console.log(this.query,"this.query")
        if(this.query.price == ''){
          this.$message('请输入开始价格!');
          return;
        }
        if(this.query.price_second== ''){
          this.$message('请输入结束价格!');
          return;
        }
        this.getList()
      },
      //重置数据
      initData(){
        this.query = {
          user_token:getToken(),
          list_rows:20,
          page:1,
          search_data:'',
          cate_id:'',//商品分类id
          level_id:'',//折扣id
          price:'',//开始价格
          price_second:'',//结束价格
        }
        this.getList()
      }
  }
}
</script>
<style lang="less">
@import url("../../assets/css/product.less");
.el-button.is-circle{
  border-radius: 0;
  padding:0.2rem;
}

</style>