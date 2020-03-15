<template>
  <nav class="bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button @click="navOpen = !navOpen" class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path :class="{'hidden': navOpen, 'inline-flex': !navOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path :class="{'hidden': !navOpen, 'inline-flex': navOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:justify-start">
          <div class="flex-shrink-0">
            <router-link :to="{name:'index'}" class="text-gray-900 text-2xl">toNovel</router-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <a href="#" class="px-3 rounded-md text-sm font-medium leading-5 hover:text-gray-600 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out">更新日志</a>
              <a href="#" class="ml-2 px-3 rounded-md text-sm font-medium leading-5 hover:text-gray-600 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out">捐赠</a>
              <a href="#" class="ml-2 px-3 rounded-md text-sm font-medium leading-5 hover:text-gray-600 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out">GitHub</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button class="p-1 border-2 border-transparent rounded-full focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out">
            <svg class="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </button>
          <div class="ml-3">
            <dropdown>
              <button class="p-1 flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out">
                <svg class="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </button>
              <div slot="dropdown" class="py-1 rounded-md shadow-lg bg-white">
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">我的主页</a>
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">个人设置</a>
                <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">注销</a>
              </div>
            </dropdown>
          </div>
        </div>
        <a href="/auth/login" class="text-gray-300 text-sm hover:text-white" v-show="false">我的书架</a>
      </div>
    </div>
    <div :class="{'block': navOpen, 'hidden': !navOpen}" class="sm:hidden">
      <div class="px-2 pt-2 pb-3">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium focus:outline-none bg-gray-200 focus:bg-gray-200 transition duration-150 ease-in-out">更新日志</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out">捐赠</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out">GitHub</a>
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from '@/components/Dropdown'

export default {
  name: 'AppHeader',
  components: {
    Dropdown
  },
  data () {
    return {
      navOpen: true
    }
  }
}
</script>

<style>

</style>
