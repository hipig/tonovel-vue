<template>
  <div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mt-8">
    <search-input></search-input>
    <div class="mt-8">
      <div class="text-gray-500 mb-2">关键词为 “{{keyword}}” 的搜索小说结果：</div>
      <div class="flex flex-col">
        <loading :loading="isLoading">
          <div v-for="(b, i) in list" :key="i" class="shadow-md rounded-md p-6 flex items-center bg-white mb-6">
            <div class="flex-1">
              <div class="flex items-center">
                <router-link :to="{ name: 'detail', query: { detail_url: b.url, source: b.source }}" class="text-2xl text-gray-900">{{b.name}}</router-link>
                <div class="inline-flex ml-4" v-if="b.category">
                  <span class="border rounded-md px-2 leading-6 text-sm bg-gray-200">{{b.category}}</span>
                </div>
              </div>
              <div class="text-gray-500 pt-1" v-if="b.new_chapter">最新章节：<span>{{b.new_chapter}}</span></div>
              <div class="text-gray-500 pt-1">作者：<span>{{b.author}}</span></div>
              <div class="text-gray-500 pt-1">来源：<a :href="b.url" target="_blank">{{b.url}}</a></div>
            </div>
            <a href="#" class="h-32 border rounded p-1" v-if="b.cover">
              <img class="h-full" :src="b.cover" alt="">
            </a>
          </div>
        </loading>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'
import Loading from '@/components/Loading'
import {apiSearch} from '@/api'

export default {
  components: {
    SearchInput,
    Loading
  },
  data () {
    return {
      keyword: "",
      list: [],
      isLoading: true
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 确认渲染该组件的对应路由时，获取搜索结果
      vm.getListByKeyword(to.query.q)
    })
  },
  // 当前路由改变，该组件被复用时，获取搜索结果
  beforeRouteUpdate(to, from, next) {
    this.getListByKeyword(to.query.q)
    next()
  },
  // 离开该组件的对应路由时，清空搜索值
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('search/clearValue')
    next()
  },
  methods: {
    // 使用关键字 keyword 获取搜索结果
    getListByKeyword(keyword) {
      if (keyword) {
        this.keyword = keyword
        // 需要提交事件类型，以更新搜索框的值
        this.$store.dispatch('search/updateValue', keyword)

        apiSearch(keyword).then(res => {
          this.isLoading = false
          this.list = res.data
        })
      }
    }
  }
}
</script>

<style>

</style>
