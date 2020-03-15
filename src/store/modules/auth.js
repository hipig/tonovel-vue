import * as types from '../mutation-types'

// state
export const state = {
  token: ''
}

// getters
export const getters = {
  token: state => state.token
}

// mutations
export const mutations = {
  [types.UPDATE_TOKEN] (state, token) {
    state.token = token
  }
}

// actions
export const actions = {
  updateToken({ commit }, token) {
    commit('UPDATE_TOKEN', token)
  }
}
