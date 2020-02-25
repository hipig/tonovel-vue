<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="w-full max-w-md">
      <h1 class="text-center font-bold text-4xl">Mono Admin</h1>
      <form class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden" @submit.prevent="submit">
        <div class="px-10 py-12">
          <h1 class="text-center text-2xl">欢迎登录</h1>
          <div class="mx-auto mt-6 w-24 border-b-2"></div>
          <validation-provider name="用户名" rules="required" v-slot="{ errors }">
            <text-input v-model="form.username" :errors="errors" class="mt-10" label="用户名" autofocus autocapitalize="off" />
          </validation-provider>
          <validation-provider name="密码" rules="required" v-slot="{ errors }">
            <text-input v-model="form.password" :errors="errors" class="mt-6" label="密码" type="password" />
          </validation-provider>
          <checkbox v-model="form.remember" class="mt-6">记住密码</checkbox>
        </div>
        <div class="px-10 py-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
          <a href="#" class="hover:underline">忘记密码?</a>
          <loading-button :loading="sending" type="submit">登录</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/TextInput'
import Checkbox from '@/components/Checkbox'
import LoadingButton from '@/components/LoadingButton'

export default {
  components: {
    TextInput,
    Checkbox,
    LoadingButton
  },
  data () {
    return {
      sending: false,
      form: {
        username: 'admin',
        password: 'admin',
        remember: null
      }
    }
  },
  methods : {
    submit () {
      this.sending = true
      this.$store.dispatch('user/login', this.form)
    }
  }
};
</script>

<style>
</style>
