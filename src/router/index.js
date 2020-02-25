import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

const router = createRouter()

export default router

function createRouter () {
  const router = new Router({
    mode: 'history',
    base: '/',
    routes
  })

  return router
}
