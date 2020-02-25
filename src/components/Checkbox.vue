<template>
  <div class="flex items-center select-none">
    <input
      v-bind="$attrs"
      class="appearance-none rounded align-middle inline-block flex-shrink-0 select-none border border-gray-300 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 form-checkbox"
      :class="{ 'border-red-600': errors.length }"
      type="checkbox"
      :checked="checked"
      @change="checked=!checked"
    />
    <span class="ml-2 block text-gray-700 text-sm select-none" @click="checked=!checked"><slot /></span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: String,
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      checked: false
    }
  }
};
</script>

<style lang="scss" scoped>
.form-checkbox {
  color-adjust: exact;
  background-origin: border-box;
  height: 1em;
  width: 1em;
  &:checked {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E");
    border-color: transparent;
    background-color: #667eea;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
}
@media not print {
    .form-checkbox::-ms-check {
      border-width: 1px;
      color: transparent;
      background: inherit;
      border-color: inherit;
      border-radius: inherit;
    }
  }
</style>
