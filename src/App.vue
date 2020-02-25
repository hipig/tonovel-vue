<template>
  <div id="app" class="font-sans leading-none text-gray-700 bg-gray-200 antialiased">
    <portal-target name="dropdown" slim />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

</style>
