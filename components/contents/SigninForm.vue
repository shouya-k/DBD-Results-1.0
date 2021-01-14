<template>
  <div class="signin-up">
    <div class="signin-up__inner">
      <h1 class="signin-up__title">サインイン</h1>
      <form class="form">
        <div class="form__item">
          <i class="fas fa-user form__icon"></i>
          <input v-model="username" class="form__input" type="text" placeholder="ユーザー名" />
        </div>
        <div class="form__item">
          <i class="fas fa-lock form__icon"></i>
          <input v-model="password" class="form__input" type="password" placeholder="パスワード" />
        </div>
        <button class="form__btn" @click.prevent="signin">ログイン</button>
      </form>

      <div class="error" :class="{ error__visible: isVisible }">
        <h2 class="error__title">エラー</h2>
        <p class="error__message">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
import { useSignin } from '../../compositions/useSignin'

export default defineComponent({
  setup(props, context) {
    const router = context.root.$router

    const form = reactive({
      username: '',
      password: '',
      isVisible: false,
      errorMessage: ''
    })

    const signin = async (): Promise<void> => {
      try {
        await useSignin(form.username, form.password)
        router.push('/')
      } catch (error) {
        console.log(error)
        form.isVisible = true
        form.errorMessage = 'ユーザー名またはパスワードが間違っています。'
      }
    }

    return {
      ...toRefs(form),
      signin
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_signin-up-form.scss';
</style>
