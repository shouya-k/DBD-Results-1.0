<template>
  <div class="bg">
    <Head />
    <Content />
  </div>
</template>

<script>
import Head from '~/components/layout/header'
import Content from '~/components/contents/content'
export default {
  components: {
    Head,
    Content,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_background-image';
</style>
