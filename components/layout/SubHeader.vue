<template>
  <div class="head">
    <nav class="nav">
      <ul class="nav__menu">
        <li class="nav__item">
          <nuxt-link to="/all-result" class="nav__link" active-class="nav__link--active" exact
            >全体戦績</nuxt-link
          >
        </li>
        <li class="nav__item">
          <nuxt-link to="/" class="nav__link" active-class="nav__link--active" exact
            >個人戦績</nuxt-link
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
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {}
})
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  height: 60px;
  font-size: 2.6rem;
  position: sticky;
  top: 60px;
  z-index: 5;
  background-image: url('~@/assets/img/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  margin-bottom: 35px;
}

.nav {
  height: 60px;
  margin: auto 0;

  &__menu {
    display: flex;
  }

  &__item {
    padding-left: 40px;

    &:first-child {
      padding-left: 60px;
    }
  }

  &__link {
    color: #fff;
    display: block;
    line-height: 60px;
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
