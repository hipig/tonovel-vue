import * as types from '../mutation-types'

// state
export const state = {
  theme: 'orange',
  fontFamily: 'sans',
  fontSize: 3,
  lineHeight: 4,
}

// getters
export const getters = {
  theme: state => state.theme,
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
  fontFamily: state => state.fontFamily,
  fontSize: state => state.fontSize,
  lineHeight: state => state.lineHeight,
  fontFamilySet: state => {
    return 'font-'+state.fontFamily
  },
  fontSizeSet: state => {
    var fontSizes = [
      'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'
    ]
    return 'text-'+fontSizes[state.fontSize-1]
  },
  lineHeightSet: state => {
    var lineHeights = [
      'none', 'tight', 'snug', 'normal', 'relaxed'
    ]
    return 'leading-'+lineHeights[state.lineHeight-1]
  }
}

// mutations
export const mutations = {
  [types.UPDATE_THEME] (state, theme) {
    state.theme = theme
  },
  [types.UPDATE_FONT_FAMILY] (state, fontFamily) {
    state.fontFamily = fontFamily
  },
  [types.UPDATE_FONT_SIZE] (state, fontSize) {
    state.fontSize = fontSize
  },
  [types.UPDATE_LINE_HEIGHT] (state, lineHeight) {
    state.lineHeight = lineHeight
  }
}

// actions
export const actions = {
  updateTheme({ commit }, theme) {
    commit('UPDATE_THEME', theme)
  },
  updateFontFamily({ commit }, fontFamily) {
    commit('UPDATE_FONT_FAMILY', fontFamily)
  },
  updateFontSize({ commit }, fontSize) {
    commit('UPDATE_FONT_SIZE', fontSize)
  },
  updateLineHeight({ commit }, lineHeight) {
    commit('UPDATE_LINE_HEIGHT', lineHeight)
  }
}
