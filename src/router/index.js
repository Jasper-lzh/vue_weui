import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import BillList from '@/components/BillList'
import detail from '@/components/detail'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  hashbang: true, // 将路径格式化为#!开头
  history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
  /**
   * @desc 路由配置
   */
  routes: [
    {
      path: '/detail',
      component: detail
    }, {
      path: '/home',
      component: BillList
    }, {
      path: '/*',
      component: BillList
    }
  ]
})
/**
 * @desc 全局监听路由变化
 */
router.beforeEach((to, from, next) => {
  store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
  next()
})

export default router
