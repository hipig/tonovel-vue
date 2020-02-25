<template>
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out">
    <div class="spinner mr-2" v-if="loading" />
    <slot class="-ml-1 mr-2 h-5 w-5" name="icon" v-if="!loading" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
}
</script>

<style lang="scss" scoped>
  .spinner {
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    border-left: 2px solid transparent;
    transform: translateZ(0);
    animation: spinning 1s infinite linear;
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }

  @keyframes spinning {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
</style>
