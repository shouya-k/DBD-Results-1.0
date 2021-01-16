<template>
  <header class="head">
    <h1 class="head__title">DbD 戦績記録</h1>
    <nav class="nav">
      <ul class="nav__menu">
        <li class="nav__item">
          <nuxt-link to="/killer" class="nav__link" active-class="nav__link--active" exact
            >キラー</nuxt-link
          >
        </li>
        <li class="nav__item">
          <nuxt-link to="/survivor" class="nav__link" active-class="nav__link--active" exact
            >サバイバー</nuxt-link
          >
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
import SubHead from './SubHeader.vue'

export default defineComponent({
  components: {
    SubHead
  },
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
  height: 60px;
  display: flex;
  font-size: 2.4rem;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 5;
  background-image: url('~@/assets/img/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #fff;

  &__title {
    color: #fff;
    font-weight: bold;
    margin: auto 0 auto 40px;
  }
}

.nav {
  // height: 100px;
  margin: auto 0 auto auto;

  &__menu {
    display: flex;
  }

  &__item {
    padding-right: 40px;

    &:first-child {
      padding-right: 60px;
    }
  }

  &__link {
    color: #fff;
    display: block;
    text-align: center;
    line-height: 60px;
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
