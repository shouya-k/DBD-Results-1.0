<template>
  <div class="bg">
    <Header />
    <Form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Head from '../components/layout/header.vue'
import Form from '../components/contents/results-form.vue'
import { useCurrentUserState } from '../compositions/useCurrentUserState'
export default defineComponent({
  components: {
    Head,
    Form
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
