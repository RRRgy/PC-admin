import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Layout: 整体界面布局的根路由组件
import Layout from '@/layout'
export const constantRoutes = [
  // 登陆
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    // hidden: true
  },
  // 404
  {
    path: '/404',
    component: () => import('@/views/404'),
    // hidden: true
  },
  // 首页根路由
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { 
        title: '首页', 
        icon: 'dashboard' 
      }
    }]
  },
]


export const lastRoute = { 
  path: '*', 
  redirect: '/404', 
  hidden: true 
}


const createRouter = () => new Router({
  mode: 'hash', // 带#模式
  scrollBehavior: () => ({ y: 0 }), // 切换路由自动滑动到顶部
  routes: constantRoutes // 默认只有常量路由, 其它权限路由后面动态添加
})

// 生成只包含常量路由的路由器
const router = createRouter()


export function resetRouter() {
  // 重新生成只包含常量路由的路由器
  const newRouter = createRouter()

  // 重置路由器的matcher(只包含常量路由)
  router.matcher = newRouter.matcher 
}

// 向外暴露路由器
export default router
