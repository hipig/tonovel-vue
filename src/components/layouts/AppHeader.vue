<template>
  <div class="md:flex flex-shrink-0">
    <div class="bg-gray-900 md:flex-shrink-0 md:w-56 px-6 py-4 flex items-center justify-between md:justify-center">
      <a href="/" class="mt-1 text-white py-1 text-2xl">
        后台管理
      </a>
      <button type="button" class="md:hidden text-white">
        <svg
          viewBox="0 0 20 20"
          class="w-6 h-6"
          fill="currentColor"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <!---->
      </button>
    </div>
    <div class="bg-white shadow w-full p-4 md:py-0 md:px-12 text-sm md:text-md flex justify-between items-center">
      <div class="mt-1 mr-4"></div>
      <button type="button" class="mt-1 focus:outline-none text-gray-700 hover:text-indigo-600 focus:text-indigo-600">
        <div class="flex items-center cursor-pointer select-none">
          <div class="mr-1 whitespace-no-wrap" >
            <span>John</span>
            <span class="hidden md:inline">Doe</span>
          </div>
          <svg
            viewBox="0 0 20 20"
            class="w-5 h-5"
            fill="currentColor"
          >
            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
