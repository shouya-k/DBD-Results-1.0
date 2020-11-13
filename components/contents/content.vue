<template>
  <table class="table">
    <tr class="table__header">
      <th class="table__th">対戦キラー</th>
      <th class="table__th">対戦数</th>
      <th class="table__th">平均得点</th>
      <th class="table__th">勝率</th>
    </tr>

    <Trapper />
    <Wraith />
    <Hillbilly />
    <Nurse />
    <Hag />
    <Doctor />
    <Huntress />
    <Shape />
    <Cannibal />
    <Pig />
    <Clown />
    <Spirit />
    <Legion />
    <Plague />
    <GhostFace />
    <Demogorgon />
    <Oni />
    <Executioner />
  </table>
</template>

<script>
import Trapper from '~/components/parts/killer-data/killer01-data'
import Wraith from '~/components/parts/killer-data/killer02-data'
import Hillbilly from '~/components/parts/killer-data/killer03-data'
import Nurse from '~/components/parts/killer-data/killer04-data'
import Hag from '~/components/parts/killer-data/killer05-data'
import Doctor from '~/components/parts/killer-data/killer06-data'
import Huntress from '~/components/parts/killer-data/killer07-data'
import Shape from '~/components/parts/killer-data/killer08-data'
import Cannibal from '~/components/parts/killer-data/killer09-data'
import Pig from '~/components/parts/killer-data/killer10-data'
import Clown from '~/components/parts/killer-data/killer11-data'
import Spirit from '~/components/parts/killer-data/killer12-data'
import Legion from '~/components/parts/killer-data/killer13-data'
import Plague from '~/components/parts/killer-data/killer14-data'
import GhostFace from '~/components/parts/killer-data/killer15-data'
import Demogorgon from '~/components/parts/killer-data/killer16-data'
import Oni from '~/components/parts/killer-data/killer17-data'
import Executioner from '~/components/parts/killer-data/killer18-data'
export default {
  components: {
    Trapper,
    Wraith,
    Hillbilly,
    Nurse,
    Hag,
    Doctor,
    Huntress,
    Shape,
    Cannibal,
    Pig,
    Clown,
    Spirit,
    Legion,
    Plague,
    GhostFace,
    Demogorgon,
    Oni,
    Executioner,
  },
}
</script>

<style lang="scss" scoped>
.table {
  width: 80%;
  margin: 0 auto 50px;
  font-size: 1.4rem;
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
