<template>
  <div class="bg">
    <Header />
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Head from '../components/layout/header.vue'
import Content from '../components/contents/results-content.vue'
import { useCurrentUserState } from '../compositions/useCurrentUserState'
export default defineComponent({
  components: {
    Head,
    Content
  },
  setup(props, context) {
    const { currentUserState } = useCurrentUserState(context)

    currentUserState()
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_background-image';
</style>
