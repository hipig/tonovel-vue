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
      <div class="flex items-center">
        <div class="flex-1 pr-2 sm:pr-6">
          <input type="text" class="appearance-none block w-full py-3 px-4 leading-none sm:leading-normal border placeholder-gray-500 rounded-lg focus:outline-none focus:shadow-outline-gray focus:z-10 sm:px-5 text-sm sm:text-lg" placeholder="请输入小说名称，作者，标签..." autofocus>
        </div>
        <button type="button" class="inline-flex items-center px-4 border border-transparent font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:border-gray-900 active:bg-gray-900 focus:shadow-outline-gray transition duration-150 ease-in-out sm:py-3 sm:px-6 leading-none sm:leading-normal text-sm sm:text-lg">
          <svg viewBox="0 0 20 20" class="-ml-1 mr-1 h-5 w-5 sm:h-6 sm:w-6 fill-current">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
          </svg>
          <span>搜索</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return { }
  }
}
</script>

<style scoped>

</style>
