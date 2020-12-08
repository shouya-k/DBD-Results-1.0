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
            >戦績記録
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  height: 100px;
  display: flex;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 3;
  background-image: url('~@/assets/img/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.nav {
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
