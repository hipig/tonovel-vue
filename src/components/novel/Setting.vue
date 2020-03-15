<template>
  <div class="rounded-md shadow-lg bg-white px-6 py-4 w-full sm:w-3/5 overflow-y-auto">
    <h3 class="text-center text-xl mb-4 text-gray-500">设置</h3>
    <div class="flex flex-col">
      <div class="flex items-center mb-8">
        <div class="w-1/4 py-2 text-lg">背景主题</div>
        <div class="flex-1 flex flex-wrap -mb-4">
          <div v-for="(t, i) in themes" :key="i" class="mr-5 mb-4 w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer" :class="getThemeClass(t)" @click="switchTheme(t)">
            <svg viewBox="0 0 20 20" class="w-5 h-5 fill-current" v-if="currentTheme == t">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>

        </div>
      </div>
      <div class="flex items-center mb-8">
        <div class="w-1/4 py-2 text-lg">字体样式</div>
        <div class="flex-1">
          <div class="flex flex-wrap">
            <div class="px-4 sm:px-8 py-1 sm:py-2 border border-r-0 rounded-tl-lg rounded-bl-lg" :class="getFontFamilyClass('sans')" @click="switchFontFamily('sans')">默认</div>
            <div class="px-4 sm:px-8 py-1 sm:py-2 border" :class="getFontFamilyClass('serif')" @click="switchFontFamily('serif')">样式1</div>
            <div class="px-4 sm:px-8 py-1 sm:py-2 border border-l-0 rounded-tr-lg rounded-br-lg" :class="getFontFamilyClass('mono')" @click="switchFontFamily('mono')">样式2</div>
          </div>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <div class="w-1/4 py-2 text-lg">字体大小</div>
        <div class="flex-1">
          <div class="flex flex-wrap">
            <div class="px-4 sm:px-8 py-1 sm:py-2 border border-r-0 hover:bg-gray-200 rounded-tl-lg rounded-bl-lg cursor-pointer text-xl leading-tight font-semibold" @click="decreaseFontSize"><span>A</span>-</div>
            <div class="px-4 sm:px-8 py-1 sm:py-2 border flex items-center text-lg leading-tight">{{currentFontSize}}</div>
            <div class="px-4 sm:px-8 py-1 sm:py-2 border border-l-0 hover:bg-gray-200 rounded-tr-lg rounded-br-lg cursor-pointer text-xl leading-tight font-semibold" @click="increaseFontSize"><span>A</span>+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'orange'
    },
    fontFamily: {
      type: String,
      default: 'sans'
    },
    fontSize: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      themes: [
        'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'
      ],
      fontSizes: [
        'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'
      ],
      currentTheme: this.theme,
      currentFontFamily: this.fontFamily,
      currentFontSize: this.fontSize
    }
  },
  computed: {
    currentSize () {
      let fontSizes = this.fontSizes
      let fontSize = this.fontSize > length(fontSizes) ? length(fontSizes) : this.fontSize
      return fontSizes[fontSize]
    }
  },
  methods: {
    getThemeClass (theme) {
      let bgColor = 'bg-'+theme+ '-50'
      let borderColor = 'border-'+theme+'-100'
      return {
        [bgColor]: true,
        [borderColor]: true
      }
    },
    getFontFamilyClass (family) {
      let selected = this.currentFontFamily == family

      return {
        'text-white bg-gray-700 border-gray-700': selected,
        'hover:bg-gray-200 cursor-pointer': !selected
      }
    },
    switchTheme (theme) {
      this.currentTheme = theme
      this.$store.dispatch('setting/updateTheme', theme)
      event.stopPropagation()
    },
    switchFontFamily(family) {
      this.currentFontFamily = family
      this.$store.dispatch('setting/updateFontFamily', family)
      event.stopPropagation()
    },
    increaseFontSize () {
      let size = this.currentFontSize
      let len = this.fontSizes.length
      size = size >= len ? len : size+1
      this.currentFontSize = size
      this.$store.dispatch('setting/updateFontSize', size)
      event.stopPropagation()
    },
    decreaseFontSize () {
      let size = this.currentFontSize
      if (size > 1) {
        size--
      }
      this.currentFontSize = size
      this.$store.dispatch('setting/updateFontSize', size)
      event.stopPropagation()
    }
  }
}
</script>

<style>

</style>
