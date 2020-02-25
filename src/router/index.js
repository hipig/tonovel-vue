import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const router = createRouter()

router.beforeEach(before)

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
  const user = Boolean(store.state.user.user)

  if (user || to.path.indexOf('/auth/') !== -1) {
    next()
  }else {
    next('/auth/login')
  }
}
