import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//解决在使用ElementUI中的导航时，默认情况下如果重复点击某选项，会报错。
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: '登录',
      component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
    },
    {
      path: '/register',
      name: '注册',
      component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
    },
    {
      path: '/home',
      name: '首页',
      meta:{
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    },
    {
      path: '/introduce',
      name: 'VIP介绍',
      component: () => import(/* webpackChunkName: "about" */ '../views/product/vipIntroduce.vue')
    },
    {
      path: '/deal',
      name: '产品分类',
      component: () => import(/* webpackChunkName: "about" */ '../views/product/deal.vue')
    },
    {
      path: '/detail',
      name: '商品详情',
      component: () => import(/* webpackChunkName: "about" */ '../views/product/detail.vue')
    },
    {
      path: '/coupon',
      name: '优惠券',
      component: () => import(/* webpackChunkName: "about" */ '../views/product/coupon.vue')
    },
    {
      path: '/mine',
      name: 'Vip中心',
      component: () => import(/* webpackChunkName: "about" */ '../views/vipcenter/mine.vue'),
      children:[
        {
          path: '/',
          redirect: 'like'
        },
        {
          path: 'change',
          name: 'home',
          component: () => import('../views/vipcenter/change.vue'),
          meta: {
            title: '修改密码'
          }
        },
        {
          path: 'edit',
          name: 'profile',
          component: () => import('../views/vipcenter/profile.vue'),
          meta: {
            title: '编辑信息'
          }
        },
        {
          path: 'notice',
          name: 'notice',
          component: () => import('../views/vipcenter/notice.vue'),
          meta: {
            title: '消息列表'
          }
        },
        {
          path: 'vip',
          name: 'vip',
          component: () => import('../views/vipcenter/vip.vue'),
          meta: {
            title: 'vip'
          }
        },
        {
          path: 'like',
          name: 'favoite',
          component: () => import('../views/vipcenter/favoite.vue'),
          meta: {
            title: 'favoite'
          }
        },
        {
          path: 'request',
          name: 'Deal Requested',
          component: () => import('../views/vipcenter/request.vue'),
          meta: {
            title: 'Deal Requested'
          }
        },
      ]
    },
  ]
  

})