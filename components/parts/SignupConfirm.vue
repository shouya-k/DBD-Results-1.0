<template>
  <div class="signin-up__inner">
    <h1 class="signin-up__title">ユーザー確認</h1>
    <form class="form">
      <div class="form__item">
        <i class="fas fa-user form__icon"></i>
        <input v-model="username" class="form__input" type="text" placeholder="ユーザー名" />
      </div>
      <div class="form__item">
        <i class="fas fa-lock form__icon"></i>
        <input v-model="confirmCode" class="form__input" type="password" placeholder="確認コード" />
      </div>
      <button class="form__btn" @click.prevent="confirmSignup">送信する</button>
    </form>
    <div class="signin-up__footer">
      <p class="signin-up__footer--text">メールアドレスに確認コードを送信しました。</p>
      <p>メールを確認してコードを入力してください。</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useConfirmSignUp } from '../../compositions/useConfirmSignup'

export default defineComponent({
  props: {
    username: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const router = context.root.$router

    const confirmCode = ref<string>('')

    const confirmSignup = (): void => {
      useConfirmSignUp(props.username, props.password, confirmCode.value).then(() => {
        router.push('/')
      })
    }
    return {
      confirmCode,
      confirmSignup
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_signin-up-form.scss';
</style>
