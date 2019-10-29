import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{title:'首页',requireAuth:true},
      component: ()=> import('./views/index')
    },
    {
      path: '/Category',
      name: 'category',
      meta:{title:'分类',requireAuth:true},
      component: ()=> import('./views/content/Category')
    },
    {
      path: '/shopping',
      name: 'shopping',
      meta:{title:'购物车',requireAuth:true},
      component: ()=> import('./views/shopping/shopping')
    },
    {
      path: '/my',
      name: 'my',
      meta:{title:'我的',requireAuth:true},
      component: ()=> import('./views/my/my')
    },
      {
          path: '/collect',
          name: 'collect',
          meta:{title:'收藏',requireAuth:true},
          component: ()=> import('./views/my/collect')
      },
    {
      path: '/myorder',
      name: 'myorder',
      meta:{title:'我的订单',requireAuth:true},
      component: ()=> import('./views/my/myorder')
    },

      {
          path: '/list',
          name: 'list',
        meta:{title:'列表',requireAuth:true},
          component: ()=> import('./views/list/list')
      },
    {
      path: '/team',
      name: 'team',
      meta:{title:'团队',requireAuth:true},
      component: ()=> import('./views/team/team')
    },
    {
      path: '/detail',
      name: 'detail',
      meta:{title:'商品详情',requireAuth:true},
      component: ()=> import('./views/detail/detail')
    },
    {
      path: '/login',
      name: 'login',
      meta:{title:'登录'},
      component: ()=> import('./views/login/login')
    },
    {
      path: '/register',
      name: 'register',
      meta:{title:'注册'},
      component: ()=> import('./views/login/register')
    },
    {
      path: '/orders',
      name: 'orders',
      meta:{title:'订单',requireAuth:true},
      component: ()=> import('./views/orders/orders')
    },


  ]
})
