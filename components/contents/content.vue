<template>
  <table class="table">
    <tr class="table__header">
      <th class="table__th">対戦キラー</th>
      <th class="table__th">対戦数</th>
      <th class="table__th">平均得点</th>
      <th class="table__th">勝率</th>
    </tr>

    <KillerData
      v-for="killer in killers"
      :id="killer.id"
      :key="killer.id"
      :name="killer.name"
      :img="killer.url"
    ></KillerData>
  </table>
</template>

<script>
import KillerData from '../parts/killer-data.vue'
import killersData from '~/static/js/killerData'
export default {
  components: {
    KillerData
  },
  data() {
    return {
      killers: killersData
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 80%;
  margin: 0 auto 50px;
  font-size: 1.6rem;
  color: #fff;

  &__th {
    width: 20%;
    padding-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #fff;
    position: sticky;
    top: 100px;
    z-index: 1;
    background-image: url('~@/assets/img/bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
}
</style>
