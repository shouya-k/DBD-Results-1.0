<template>
  <div class="bg">
    <Header />
    <From />
  </div>
</template>

<script>
import Header from '~/components/layout/header'
// import From from '~/components/contents/new-results'
import From from '~/components/contents/results-form'
export default {
  components: {
    Header,
    From,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_background-image';
</style>
