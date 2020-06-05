import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
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
          redirect: 'change'
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
          path: 'class',
          name: 'Deal Requested',
          component: () => import('../views/vipcenter/classify.vue'),
          meta: {
            title: 'Deal Requested'
          }
        },
      ]
    },
  ]
})
