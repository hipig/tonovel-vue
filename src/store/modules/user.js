import router from '@/router'
import { UPDATE_USER } from '../mutation-types'

// state
export const state = {
  user: null
}

// getters
export const getters = {
  user: state => state.user
}

// mutations
export const mutations = {
  [UPDATE_USER] (state, user) {
    state.user = user
  }
}

// actions
export const actions = {
  login({ commit }, user) {
    if (user) commit(UPDATE_USER, user)
    router.push({ name: 'dashboard'})
  },
  logout({ commit }) {
    commit('UPDATE_USER', null)
    router.go(0)
  }
}
