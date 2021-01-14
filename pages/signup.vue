<template>
  <div class="bg">
    <Header></Header>
    <Form></Form>
  </div>
</template>

<script>
import Header from '../components/layout/LoginHeader'
import Form from '../components/contents/SignupForm'
export default {
  components: {
    Header,
    Form
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_signin-up-image.scss';
</style>
