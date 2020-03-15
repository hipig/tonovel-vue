<template>
  <div @click="show = !show" v-on-clickaway="handleClickOutside" class="relative">
    <slot />
    <transition
      enter-class="transform opacity-0 scale-95"
      enter-active-class="transition ease-out duration-100"
      enter-to-class="transform opacity-100 scale-100"
      leave-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div class="origin-top-right absolute right-0 mt-2 w-48 z-50" v-show="show">
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClickOutside () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
