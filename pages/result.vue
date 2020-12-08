<template>
  <div class="bg">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from '~/components/layout/header'
import Content from '~/components/contents/results-content'
export default {
  components: {
    Header,
    Content
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_background-image';
</style>
