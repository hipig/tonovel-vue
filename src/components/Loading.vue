<template>
  <div>
    <div class="w-full flex items-center justify-center h-64 duration-150 ease-in-out" v-if="loading">
      <div class="spinner" />
    </div>
    <div v-else>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .spinner {
    border-top: 3px solid #6b7280;
    border-right: 3px solid #6b7280;
    border-bottom: 3px solid #6b7280;
    border-left: 3px solid transparent;
    transform: translateZ(0);
    animation: spinning 1s infinite linear;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  @keyframes spinning {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
</style>
