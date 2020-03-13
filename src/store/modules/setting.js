import * as types from '../mutation-types'

// state
export const state = {
  theme: 'orange',
  fontStyle: '',
  fontSize: '1rem'
}

// getters
export const getters = {
  themeSet: state => {
    let theme = state.theme
    let bgClass100 = 'bg-'+theme+'-100'
    let bgClass50 = 'bg-'+theme+'-50'
    let borderClass = 'border-'+theme+'-100'
    return {
      toolTheme: {[bgClass100]:true},
      contentTheme: {[bgClass50]:true},
      hrTheme: {[borderClass]: true}
    }
  },
  fontStyle: state => state.fontStyle,
  fontSize: state => state.fontSize
}

// mutations
export const mutations = {
  [types.UPDATE_THEME] (state, theme) {
    state.theme = theme
  },
  [types.UPDATE_FONT_STYLE] (state, fontStyle) {
    state.theme = fontStyle
  },
  [types.UPDATE_FONT_SIZE] (state, fontSize) {
    state.theme = fontSize
  }
}

// actions
export const actions = {
  updateTheme({ commit }, theme) {
    commit('UPDATE_THEME', theme)
  },
  updateFontStyle({ commit }, thfontStyleeme) {
    commit('UPDATE_FONT_STYLE', fontStyle)
  },
  updateFontZize({ commit }, fontSize) {
    commit('UPDATE_FONT_SIZE', fontSize)
  }
}
