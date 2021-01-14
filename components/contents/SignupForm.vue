<template>
  <div class="signin-up">
    <ConfirmSignup v-if="confirm" :username="username" :password="password" />
    <div v-else class="signin-up__inner">
      <h1 class="signin-up__title">サインアップ</h1>
      <form class="form">
        <div class="form__item" :class="{ form__input_empty: isName }">
          <i class="fas fa-user form__icon"></i>
          <input
            v-model="username"
            :class="{ form__input_empty: isName }"
            class="form__input"
            type="text"
            placeholder="ユーザー名"
          />
        </div>
        <div class="form__item" :class="{ form__input_empty: isEmail }">
          <i class="fas fa-envelope form__icon"></i>
          <input
            v-model="email"
            :class="{ form__input_empty: isEmail }"
            class="form__input"
            type="email"
            placeholder="Eメールアドレス"
            required
          />
        </div>
        <div class="form__item" :class="{ form__input_empty: isPassword }">
          <i class="fas fa-lock form__icon"></i>
          <input
            v-model="password"
            :class="{ form__input_empty: isPassword }"
            class="form__input"
            type="password"
            placeholder="パスワード"
            required
          />
        </div>
        <div class="form__item" :class="{ form__input_empty: isPasswordConfirm }">
          <i class="fas fa-redo form__icon"></i>
          <input
            v-model="passwordConfirm"
            :class="{ form__input_empty: isPasswordConfirm }"
            class="form__input"
            type="password"
            placeholder="パスワードの確認"
            required
          />
        </div>
        <input type="submit" class="form__btn" value="登録" @click.prevent="signup" />
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
import { useSignup } from '../../compositions/useSignup'
import ConfirmSignup from '../parts/SignupConfirm.vue'
export default defineComponent({
  components: {
    ConfirmSignup
  },
  setup() {
    const form = reactive({
      username: '',
      password: '',
      passwordConfirm: '',
      email: '',
      img: '',
      errorMessage: '',
      confirm: false,
      isName: false,
      isEmail: false,
      isPassword: false,
      isPasswordConfirm: false,
      isVisible: false
    })

    const signup = async () => {
      try {
        form.username === '' ? (form.isName = true) : (form.isName = false)
        form.email === '' ? (form.isEmail = true) : (form.isEmail = false)
        form.password === '' ? (form.isPassword = true) : (form.isPassword = false)
        form.passwordConfirm === ''
          ? (form.isPasswordConfirm = true)
          : (form.isPasswordConfirm = false)

        if (
          form.username === '' ||
          form.email === '' ||
          form.password === '' ||
          form.passwordConfirm === ''
        ) {
          form.isVisible = true
          form.errorMessage = '全ての項目を入力してください。'
        } else if (form.password !== form.passwordConfirm) {
          form.isVisible = true
          form.isPasswordConfirm = true
          form.errorMessage = 'パスワードが間違っています。'
        } else {
          await useSignup(form)
          form.confirm = true
        }
      } catch (error) {
        console.log(error)
      }
    }

    return {
      ...toRefs(form),
      signup
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_signin-up-form.scss';
</style>
