<template>
  <header class="head">
    <nav class="nav">
      <ul class="nav__menu">
        <li class="nav__item">
          <nuxt-link to="/" class="nav__link" active-class="nav__link--active" exact
            >戦績記録</nuxt-link
          >
        </li>
        <li class="nav__item">
          <nuxt-link to="/result" class="nav__link" active-class="nav__link--active"
            >直近戦績</nuxt-link
          >
        </li>
        <li class="nav__item">
          <nuxt-link to="/new-result" class="nav__link" active-class="nav__link--active"
            >戦績登録
          </nuxt-link>
        </li>

        <li class="nav__item">
          <a class="nav__link" @click="signout">ログアウト</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
export default defineComponent({
  setup(props, context) {
    const router = context.root.$router

    const signout = async (): Promise<void> => {
      await Auth.signOut()
      router.push('/signin')
    }

    return {
      signout
    }
  }
})
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  // height: 100px;
  font-size: 2.4rem;
  position: relative;
  top: 0;
  z-index: 3;
  background-image: url('~@/assets/img/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.nav {
  height: 100px;

  &__menu {
    display: flex;
  }

  &__item {
    padding-left: 40px;

    &:first-child {
      padding-left: 60px;
    }

    &:last-child {
      margin-left: auto;
      margin-right: 10px;
    }
  }

  &__link {
    color: #fff;
    display: block;
    line-height: 100px;
    text-align: center;
    letter-spacing: 1px;

    &:hover {
      color: red;
    }

    &--active {
      color: red;
    }
  }
}
</style>
