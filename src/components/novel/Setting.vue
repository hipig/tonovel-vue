<template>
  <div class="rounded-md shadow-lg bg-white px-6 py-4 w-3/5 overflow-y-auto">
    <h3 class="text-center text-xl mb-4 text-gray-500">设置</h3>
    <div class="flex flex-col">
      <div class="flex items-center mb-8">
        <div class="w-1/4 py-2 text-lg">背景主题</div>
        <div class="flex-1 flex flex-wrap -mb-4">
          <div v-for="(t, i) in themes" :key="i" :data-value="t" class="mr-5 mb-4 w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer" :class="'bg-'+t+'-50 border-'+t+'-100'" @click="switchTheme(t)">
            <svg viewBox="0 0 20 20" class="w-5 h-5 fill-current" v-if="theme == t">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>

        </div>
      </div>
      <div class="flex items-center mb-8">
        <div class="w-1/4 py-2 text-lg">字体样式</div>
        <div class="flex-1">
          <div class="flex flex-wrap">
            <div class="px-8 py-2 border border-r-0 text-white bg-gray-700 border-gray-700 rounded-tl-lg rounded-bl-lg cursor-pointer">雅黑</div>
            <div class="px-8 py-2 border hover:bg-gray-200 cursor-pointer">宋体</div>
            <div class="px-8 py-2 border border-l-0 hover:bg-gray-200 rounded-tr-lg rounded-br-lg cursor-pointer">楷书</div>
          </div>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <div class="w-1/4 py-2 text-lg">字体大小</div>
        <div class="flex-1">
          <div class="flex flex-wrap">
            <div class="px-8 py-2 border border-r-0 hover:bg-gray-200 rounded-tl-lg rounded-bl-lg cursor-pointer text-xl leading-tight font-semibold"><span>A</span>-</div>
            <div class="px-8 py-2 border flex items-center text-lg leading-tight">14</div>
            <div class="px-8 py-2 border border-l-0 hover:bg-gray-200 rounded-tr-lg rounded-br-lg cursor-pointer text-xl leading-tight font-semibold"><span>A</span>+</div>
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
      value: 'orange'
    }
  },
  data () {
    return {
      themes: [
        'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'
      ],
    }
  },
  methods: {
    switchTheme (theme) {
      this.$store.dispatch('setting/updateTheme', theme)
      event.stopPropagation()
    }
  }
}
</script>

<style>

</style>
