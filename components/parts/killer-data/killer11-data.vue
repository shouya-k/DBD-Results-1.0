<template>
  <tr class="table__tr">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer11.png" alt="" />
      クラウン
    </td>
    <td class="table__td">{{ clown.matches }}</td>
    <td class="table__td">
      {{ Math.round(clown.totalScore / clown.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((clown.win / clown.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER11_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER11_DATA,
  },
  data() {
    return {
      killers: [],
      clown: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    for (const killer of this.killers) {
      this.clown.totalScore += Number(killer.score)
      this.clown.matches++
      if (killer.win === true) {
        this.clown.win++
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
