<template>
  <div>
    <app-header></app-header>
    <div class="mb-16">
      <router-view />
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/partials/AppHeader'
import AppFooter from '@/components/partials/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>

</style>
