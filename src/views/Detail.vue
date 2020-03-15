<template>
  <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mt-8">
    <div class="shadow-md rounded-md p-6 flex sm:flex-row flex-col items-start sm:items-center bg-white">
      <div class="h-56 border rounded p-1 sm:mb-0 mb-6" v-if="info.cover">
        <img class="h-full" :src="info.cover" alt="">
      </div>
      <div class="flex-1 sm:ml-8">
        <div class="flex items-center">
          <div class="text-2xl text-gray-900">{{info.name}}</div>
          <div class="inline-flex ml-4">
            <span class="border rounded-md px-2 leading-6 text-sm bg-gray-200">{{info.category}}</span>
          </div>
        </div>
        <div class="text-gray-500 pt-1" v-if="info.author">作者：<span>{{info.author}}</span></div>
        <div class="border-t border-dashed pt-2 my-2" v-html="info.description">{{info.description}}</div>
        <div class="flex">
          <a href="javascript:;" @click="$toast('功能正在开发中')" class="inline-flex items-center px-4 py-2 border border-gray-300 font-medium rounded-md text-gray-700 text-sm bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">继续阅读</a>
          <a href="javascript:;" @click="$toast('功能正在开发中')" class="ml-2 inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md text-white text-sm bg-gray-800 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray focus:border-gray-900 active:bg-gray-900 transition duration-150 ease-in-out">加入书架</a>
        </div>
      </div>
    </div>
    <div class="shadow-md rounded-md p-6 bg-white mt-6">
      <h3 class="mb-4 text-lg text-gray-500">全部章节</h3>
      <loading :loading="chapterLoading">
        <div class="flex flex-wrap w-full border-t border-dashed">
          <div v-for="(c, i) in chapterList" :key="i" class="flex w-full sm:w-1/3 border-b border-dashed">
            <router-link :to="{ name: 'read', query: { detail_url: detailURL, chapter_url: c.chapter_url, source: c.source }}" class="text-sm hover:text-gray-800 hover:underline py-2">{{c.title}}</router-link>
          </div>
        </div>
      </loading>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import { apiInfo, apiChapters } from '@/api'

export default {
  components: {
    Loading
  },
  data () {
    return {
      info: {},
      detailURL: '',
      chapterList: [],
      chapterLoading: true
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getInfo(to.query.detail_url, to.query.source)
      vm.getChapters(to.query.detail_url, to.query.source)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.getInfo(to.query.detail_url, to.query.source)
    this.getChapters(to.query.detail_url, to.query.source)
    next()
  },
  methods: {
    getInfo(url ,source) {
      this.detailURL = url
      apiInfo(url, source).then(res => {
        this.info = res.data
      })
    },
    getChapters(url ,source) {
      apiChapters(url, source).then(res => {
        this.chapterLoading = false
        this.chapterList = res.data
      })
    }
  }
}
</script>

<style>

</style>
