<template>
  <div class="bg">
    <Head :isIndexActive="true" />
    <Content />
  </div>
</template>

<script>
import Head from '~/components/contents/header'
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
