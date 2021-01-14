<template>
  <header class="head">
    <h1 class="head__title">DbD Mobile Results</h1>
    <nav class="nav">
      <ul class="nav__menu">
        <li class="nav__item">
          <nuxt-link to="/signin" class="nav__link" active-class="nav__link--active"
            >サインイン</nuxt-link
          >
        </li>
        <li class="nav__item">
          <nuxt-link to="/signup" class="nav__link" active-class="nav__link--active"
            >サインアップ</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  height: 100px;
  display: flex;
  font-size: 2.4rem;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 3;
  // background-image: url('~@/assets/img/mainbgi.jpg');
  // background-attachment: fixed;
  // background-size: cover;
  // background-position: center;

  &__title {
    color: #fff;
    font-weight: bold;
    margin: auto 0 auto 40px;
  }
}

.nav {
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
    line-height: 42px;
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
