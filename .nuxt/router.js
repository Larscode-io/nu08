import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cbdc2292 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _8c6c6d08 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _38828aab = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages__lang_index" */))
const _18caafe6 = () => interopDefault(import('..\\pages\\_lang\\about.vue' /* webpackChunkName: "pages__lang_about" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _cbdc2292,
    name: "about"
  }, {
    path: "/",
    component: _8c6c6d08,
    name: "index"
  }, {
    path: "/:lang",
    component: _38828aab,
    name: "lang"
  }, {
    path: "/:lang/about",
    component: _18caafe6,
    name: "lang-about"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
