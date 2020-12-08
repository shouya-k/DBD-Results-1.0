<template>
  <div>
    <div class="modal" :class="{ modal__hidden: isHidden }">
      <p class="modal__title">対戦キラー</p>
      <div v-for="img in images" :key="img.id" class="modal__image">
        <img class="modal__img" :src="img.url" @click="select(img)" />
        <p class="modal__name">{{ img.name }}</p>
      </div>
    </div>
    <div class="modal__mask" :class="{ modal__hidden: isHidden }" @click="hiddenModal"></div>
  </div>
</template>

<script>
import killerData from '~/static/js/killerData'
export default {
  props: ['isHidden'],
  data() {
    return {
      img: [],
      selectImage: null,
      selectName: null,
      images: killerData
    }
  },
  methods: {
    hiddenModal() {
      this.$emit('hiddenModal')
    },
    select(img) {
      this.$emit('killerSelect', img)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 60%;
  padding: 20px;
  background-color: #fff;
  color: black;
  border: 1px solid black;
  border-radius: 2rem;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 6;

  &__title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }

  &__image {
    width: 16%;
    float: left;
    padding-top: 10px;
    margin-left: 5px;
    margin-bottom: 30px;

    &:hover {
      background-color: rgb(224, 224, 224);
    }
  }
  &__name {
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
  }

  &__img {
    display: block;
    margin: 0 auto 5px;
    width: 70px;
    height: 70px;
  }

  &__mask {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0.6;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
  }

  &__hidden {
    display: none;
  }
}
</style>
