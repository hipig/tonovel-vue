<template>
  <div class="max-w-5xl mx-auto sm:px-6 flex flex-col lg:px-8 sm:mt-8 pb-8">
    <div class="transition transform sticky top-0 inset-x-0 z-10">
      <div class="rounded-tl-md rounded-tr-md relative">
        <div class="py-2 px-4" :class="$store.getters['setting/themeSet'].toolTheme">
          <div class="flex items-center justify-between flex-wrap">
            <div class="flex-shrink-0">
              <div class="rounded-md shadow-sm">
                <router-link :to="{ name: 'read', query: { detail_url: content.detail_url, chapter_url: content.previous_url, source: content.source }}" class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-tight font-medium rounded-lg bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                  上一章
                </router-link>
              </div>
            </div>
            <div class="w-full flex-1 flex items-center justify-center">
              <div class="flex">
                <div class="flex">
                  <div @click="handleListShow" v-on-clickaway="listClickOutside" class="px-4">
                    <div class="flex flex-col items-center justify-center cursor-pointer">
                      <svg viewBox="0 0 20 20" class="w-5 h-5 fill-current">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm">目录</span>
                    </div>
                    <transition
                      enter-class="transform opacity-0 scale-95"
                      enter-active-class="transition ease-out duration-100"
                      enter-to-class="transform opacity-100 scale-100"
                      leave-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-to-class="transform opacity-0 scale-95"
                    >
                      <div class="origin-bottom sm:origin-top absolute right-0 mt-2 w-full z-50" v-show="listShow">
                        <div class="rounded-md shadow-lg bg-white px-6 py-4 max-h-96 overflow-y-auto">
                          <h3 class="text-center text-lg mb-4 text-gray-500">全部章节</h3>
                          <loading :loading="chapterLoading">
                            <div class="flex flex-wrap w-full border-t border-dashed">
                              <div v-for="(c, i) in chapterList" :key="i" class="flex w-full sm:w-1/3 border-b border-dashed">
                                <router-link :to="{ name: 'read', query: { detail_url: c.detail_url, chapter_url: c.chapter_url, source: c.source }}" class="text-sm hover:text-gray-800 hover:underline py-2">{{c.title}}</router-link>
                              </div>
                            </div>
                          </loading>
                        </div>
                      </div>
                    </transition>
                  </div>
                  <div @click="settingShow = !settingShow" v-on-clickaway="settingClickOutside" class="px-4">
                    <div class="flex flex-col items-center justify-center cursor-pointer">
                      <svg viewBox="0 0 20 20" class="w-5 h-5 fill-current">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm">设置</span>
                    </div>
                    <transition
                      enter-class="transform opacity-0 scale-95"
                      enter-active-class="transition ease-out duration-100"
                      enter-to-class="transform opacity-100 scale-100"
                      leave-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-to-class="transform opacity-0 scale-95"
                    >
                      <div class="origin-top absolute right-0 left-0 mt-2 flex justify-center z-50" v-show="settingShow">
                        <setting
                          :theme="$store.getters['setting/theme']"
                          :font-family="$store.getters['setting/fontFamily']"
                          :font-size="$store.getters['setting/fontSize']"
                          :line-height="$store.getters['setting/lineHeight']"
                        ></setting>
                      </div>
                    </transition>
                  </div>
                  <a href="javascript:;" @click="$toast('功能正在开发中')" class="flex flex-col items-center justify-center px-4">
                    <svg viewBox="0 0 20 20" class="w-5 h-5 fill-current">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                    </svg>
                    <span class="text-sm">书架</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <div class="rounded-md shadow-sm">
                <router-link :to="{ name: 'read', query: { detail_url: content.detail_url, chapter_url: content.next_url, source: content.source }}" class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-tight font-medium rounded-lg bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                  下一章
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rounded-bl-md rounded-br-md p-6" :class="$store.getters['setting/themeSet'].contentTheme">
      <loading :loading="contentLoading">
        <div class="text-center text-3xl border-b border-dashed text-gray-900 pb-2 mb-4" :class="$store.getters['setting/themeSet'].hrTheme">{{content.title}}</div>
        <div class="text-gray-700" :class="getFontClass" v-html="content.text" v-if="content.text">{{content.text}}</div>
        <div class="text-gray-700 h-60 flex items-center justify-center" v-else>没有内容了...</div>
      </loading>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '@/components/Loading'
import Setting from '@/components/book/Setting'
import { apiChapters, apiContent } from '@/api'

export default {
  components: {
    Setting,
    Loading
  },
  data () {
    return {
      listShow: false,
      settingShow: false,
      detailURL: '',
      content: {},
      chapterList: [],
      chapterLoading: true,
      contentLoading: true
    }
  },
  computed: {
    getFontClass () {
      let family = this.$store.getters['setting/fontFamilySet']
      let size = this.$store.getters['setting/fontSizeSet']
      let height = this.$store.getters['setting/lineHeightSet']
      return {
        [family]: true,
        [size]: true,
        [height]: true
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getContent(to.query.detail_url, to.query.chapter_url, to.query.source)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.query.detail_url, to.query.chapter_url, to.query.source)
    next()
  },
  methods: {
    listClickOutside () {
      this.listShow = false
    },
    settingClickOutside () {
      this.settingShow = false
    },
    getContent(detail_url, chapter_url, source) {
      apiContent(detail_url, chapter_url, source).then(res => {
        this.contentLoading = false
        this.content = res.data
      })
    },
    handleListShow () {
      this.listShow = !this.listShow
      this.getChaptList(this.content.detail_url, this.content.source)
    },
    getChaptList(url ,source) {
      apiChapters(url ,source).then(res => {
        this.chapterLoading = false
        this.chapterList = res.data
      })
    }
  }
}
</script>

<style>

</style>
