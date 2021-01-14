<template>
  <div class="bg">
    <Header></Header>
    <Form></Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '../components/layout/LoginHeader.vue'
import Form from '../components/contents/SigninForm.vue'
export default defineComponent({
  components: {
    Header,
    Form
  }
})
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_signin-up-image.scss';
</style>
