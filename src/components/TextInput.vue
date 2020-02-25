<template>
  <div>
    <label v-if="label" class="block mb-2 text-gray-700 select-none">{{ label }}:</label>
    <input ref="input" v-bind="$attrs" class="appearance-none rounded block w-full p-2 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150" :class="{ 'border-red-600': errors.length }" :type="type" :value="value" @input="$emit('input', $event.target.value)">
    <div v-if="errors.length" class="text-red-600 mt-1 text-sm">{{ errors[0] }}</div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: String,
    label: String,
    errors: {
      type: Array,
      default: () => [],
    },
  },
  methods: {

  },
}
</script>
