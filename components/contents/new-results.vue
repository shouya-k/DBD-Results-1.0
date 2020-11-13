<template>
  <form>
    <table class="table">
      <tr class="table__header">
        <th class="table__th">対戦キラー</th>
        <th class="table__th">獲得得点</th>
        <th class="table__th">使用パーク</th>
        <th class="table__th">脱出人数</th>
      </tr>
      <tr class="table__tr">
        <td class="table__td table__name" @click="showModal">
          <img class="table__img" :src="selectImage" alt="" />
          {{ selectName }}
        </td>
        <td class="table__td"><input class="table__input" type="text" /></td>
        <td class="table__td">
          <img class="table__image" src="~/assets/img/park03.png" alt="" />
          <img class="table__image" src="~/assets/img/park01.png" alt="" />
          <img class="table__image" src="~/assets/img/park02.png" alt="" />
          <img class="table__image" src="~/assets/img/park04.png" alt="" />
        </td>
        <td class="table__td">
          <select class="table__select" name="">
            <option value="0人">0人</option>
            <option value="1人">1人</option>
            <option value="2人">2人</option>
            <option value="3人">3人</option>
            <option value="4人">4人</option>
          </select>
        </td>
      </tr>
    </table>
    <div>
      <div class="modal" :class="{ modal__hidden: isHidden }">
        <p class="modal__title">対戦キラー</p>
        <div class="modal__image" v-for="img in images" :key="img.id">
          <img class="modal__img" :src="img.url" @click="select(img)" />
          <p class="modal__name">{{ img.name }}</p>
        </div>
      </div>
      <div
        class="modal__mask"
        :class="{ modal__hidden: isHidden }"
        @click="hiddenModal"
      ></div>
    </div>
  </form>
</template>

<script>
import killerData from '~/static/js/killerData'
export default {
  data() {
    return {
      isHidden: true,
      selectImage: null,
      selectName: null,
      images: killerData,
    }
  },
  methods: {
    showModal() {
      this.isHidden = false
    },
    hiddenModal() {
      this.isHidden = true
    },
    select(img) {
      this.isHidden = true
      this.selectImage = img.url
      this.selectName = img.name
    },
  },
}
</script>

<style lang="scss" scoped>
.table {
  width: 80%;
  margin: 50px auto 50px;
  font-size: 2rem;
  color: #fff;

  &__tr--win {
    background-color: rgba(255, 0, 0, 0.2);
  }
  &__tr--lose {
    background-color: rgba(0, 0, 255, 0.2);
  }

  &__th {
    width: 20%;
    padding: 0 0 20px;
    text-align: center;
    border-bottom: 1px solid #fff;
  }

  &__img {
    width: 60px;
    height: 60px;
    display: flex;
    margin: 0 auto 5px;
  }

  &__image {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 1px solid #fff;
  }

  &__name {
    font-size: 1.6rem;
  }

  &__input {
    width: 50%;
    font-size: 2rem;
    padding: 10px 0;
    outline: none;
    text-align: center;
  }

  &__select {
    font-size: 1.6rem;
    padding: 10px 0;
    outline: none;
  }

  &__td {
    width: 20%;
    padding: 28px 0 14px;
    text-align: center;
    border-bottom: 1px solid #fff;
  }
}

.modal {
  width: 60%;
  padding: 20px;
  background-color: #fff;
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
    color: rgba(0, 0, 0, 0.87);
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }

  &__image {
    width: 16%;
    float: left;
    margin-left: 5px;
    margin-bottom: 30px;
  }
  &__name {
    font-size: 1.2rem;
    text-align: center;
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
