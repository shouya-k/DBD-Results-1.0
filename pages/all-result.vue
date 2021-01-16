<template>
  <div class="bg">
    <Head />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Head from '~/components/layout/header.vue'

export default defineComponent({
  components: {
    Head
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_background-image';
</style>
