import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/Layout.vue'),
    // 重定向
    redirect: '/article',
    children: [
      {
        path: '/article',
        meta: {
          title: '文章列表'
        },
        component: () => import('@/views/Article.vue')
      },
      {
        path: '/collect',
        meta: {
          title: '收藏'
        },
        component: () => import('@/views/Collect.vue')
      },
      {
        path: '/like',
        meta: {
          title: '喜欢'
        },
        component: () => import('@/views/Like.vue')
      },
      {
        path: '/user',
        meta: {
          title: '我的'
        },
        component: () => import('@/views/User.vue')
      },

    ]
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {
      title: '文章详情'
    },
    component: () => import('@/views/ArticleDetail.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotfoundView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
