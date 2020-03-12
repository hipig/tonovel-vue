<template>
  <div class="mt-48 flex justify-center items-center">
    <div class="max-w-3xl w-full px-4 sm:px-8">
      <div class="mb-8 sm:mb-14">
        <h1 class="text-center text-5xl font-extrabold text-gray-900">
          <a href="#">toNovel</a>
        </h1>
        <h2 class="mt-4 text-center text-2xl leading-9 text-gray-500">
          做最简洁，最干净的小说聚合网站
        </h2>
      </div>
      <search-input></search-input>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'

export default {
  components: {
    SearchInput
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('search/clearValue')
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
