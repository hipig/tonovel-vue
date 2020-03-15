<template>
  <div class="fixed inset-x-0 top-0 px-4 flex justify-center" v-if="toastShow">
    <transition
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-active-class="ease-out duration-300"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="ease-in duration-200"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div class="transform transition-all text-white bg-gray-900 shadow-md rounded-md py-2 px-6 max-w-lg mt-10 z-20">{{message}}</div>
    </transition>

  </div>
</template>

<script>
import lodash from 'lodash'

export default {
  name: 'Toast',
  props: {
    message: String,
    duration: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      toastShow :false
    }
  },
  methods: {
    show () {
      this.toastShow = true
      this.duration > 0 && lodash.delay(() => {
        this.toastShow = false
      }, this.duration)
    }
  },
  destroyed: function () {
    this.$el.parentNode.removeChild(this.$el)
  }
}
</script>

<style>

</style>
