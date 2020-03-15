import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
import NProgress from "nprogress"


Vue.use(Router)

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const router = createRouter()

router.beforeEach(before)
router.afterEach(after)

export default router

function createRouter () {
  const router = new Router({
    mode: 'history',
    base: '/',
    routes
  })

  return router
}

function before(to, form, next) {
  NProgress.start()
  next()
}

function after(to, form, next) {
  NProgress.done()
}
