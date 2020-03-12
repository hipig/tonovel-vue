<template>
  <div class="mb-14">
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/partials/AppFooter'

export default {
  components: {
    AppFooter
  }
}
</script>

<style>

</style>
