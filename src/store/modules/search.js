import router from '@/router'
import { UPDATE_SEARCH_VALUE } from '../mutation-types'

// state
export const state = {
  value: ''
}

// getters
export const getters = {
  value: state => state.value
}

// mutations
export const mutations = {
  [UPDATE_SEARCH_VALUE] (state, value) {
    state.value = value
  }
}

// actions
export const actions = {
  updateValue({ commit }, value) {
    commit('UPDATE_SEARCH_VALUE', value)
  },
  clearValue({ commit }) {
    commit('UPDATE_SEARCH_VALUE', '')
  }
}
