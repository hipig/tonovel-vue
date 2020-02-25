<template>
  <div class="flex flex-col">
    <div class="h-screen flex flex-col">
      <app-header></app-header>
      <div class="flex flex-grow overflow-hidden">
        <app-sidebar></app-sidebar>
        <div class="flex-1 px-4 py-8 md:p-12 overflow-y-auto">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader'
import AppSidebar from '@/components/layouts/AppSidebar'

export default {
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>

</style>
