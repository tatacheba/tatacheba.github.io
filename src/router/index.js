'use strict'
/* eslint-env node */
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            }
          }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_router_1 = require('vue-router')
const MainContent_vue_1 = __importDefault(require('../components/MainContent.vue'))
const router = (0, vue_router_1.createRouter)({
  history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent_vue_1.default
    },
    {
      path: '/qaiunokian',
      name: 'QaPageIUNokian',
      component: () =>
        Promise.resolve().then(() => __importStar(require('../views/QaPageIUNokian.vue')))
    },
    {
      path: '/qaapinokian',
      name: 'QaPageAPINokian',
      component: () =>
        Promise.resolve().then(() => __importStar(require('../views/QaPageAPINokian.vue')))
    },
    {
      path: '/qamobilewiki',
      name: 'QaMobileWiki',
      component: () =>
        Promise.resolve().then(() => __importStar(require('../views/QaPageMobileWiki.vue')))
    }
  ]
})
router.beforeEach((to, from, next) => {
  // Прокручиваем страницу в начало
  window.scrollTo(0, 0)
  next()
})
exports.default = router
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
