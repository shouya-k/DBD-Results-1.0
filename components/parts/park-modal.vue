<template>
  <div>
    <div class="modal" :class="{ modal__hidden: isHidden }">
      <p class="modal__title">使用パーク</p>
      <div class="modal__images" v-for="img in images" :key="img.id">
        <img class="modal__img" :src="img" @click="select(img)" />
      </div>
    </div>
    <div
      class="modal__mask"
      :class="{ modal__hidden: isHidden }"
      @click="hiddenModal"
    ></div>
  </div>
</template>

<script>
import parkData from '~/static/js/parkData'
export default {
  props: ['isHidden'],
  data() {
    return {
      selectImage: null,
      selectName: null,
      images: parkData,
    }
  },
  methods: {
    hiddenModal() {
      this.$emit('hiddenModal')
    },
    select(img) {
      this.$emit('parkSelect', img)
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  width: 60%;
  padding: 20px 10px;
  background-color: #fff;
  color: black;
  border: 1px solid black;
  border-radius: 2rem;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 6;

  &__title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  &__images {
    width: 10%;
    float: left;
    padding: 7px 0;
    &:hover {
      background-color: rgb(224, 224, 224);
    }
  }

  &__img {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    width: 60px;
    height: 60px;
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
