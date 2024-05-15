import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/qaiunokian',
      name: 'QaPageIUNokian',
      component: () => import('../views/QaPageIUNokian.vue')
    },
    {
      path: '/qaapinokian',
      name: 'QaPageAPINokian',
      component: () => import('../views/QaPageAPINokian.vue')
    },
    {
      path: '/qamobilewiki',
      name: 'QaMobileWiki',
      component: () => import('../views/QaPageMobileWiki.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  // Прокручиваем страницу в начало
  window.scrollTo(0, 0)
  next()
})

export default router
// import { createRouter, createWebHistory } from 'vue-router'
// import MainContent from '../components/MainContent.vue'

// const routes = [
//   { path: '/', component: MainContent },
//   { path: '/qa-iunokian', component: () => import('../views/QaPageIUNokian.vue') },
//   { path: '/qa-apinokian', component: () => import('../views/QaPageAPINokian.vue') },
//   { path: '/qa-mobilewiki', component: () => import('../views/QaPageMobileWiki.vue') }
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })

// export default router

// import { createRouter, createWebHistory } from 'vue-router'
// import MainContent from '../components/MainContent.vue'

// const routes = [
//   { path: '/', component: MainContent },
//   { path: '/qa-iunokian', component: () => import('../views/QaPageIUNokian.vue') },
//   { path: '/qa-apinokian', component: () => import('../views/QaPageAPINokian.vue') },
//   { path: '/qa-mobilewiki', component: () => import('../views/QaPageMobileWiki.vue') }
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })

// export default router
