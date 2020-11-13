<template>
  <tr class="table__tr">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer03.png" alt="" />
      ヒルビリー
    </td>
    <td class="table__td">{{ hillbilly.matches }}</td>
    <td class="table__td">
      {{ Math.round(hillbilly.totalScore / hillbilly.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((hillbilly.win / hillbilly.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER03_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER03_DATA,
  },
  data() {
    return {
      killers: [],
      hillbilly: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    for (const killer of this.killers) {
      this.hillbilly.totalScore += Number(killer.score)
      this.hillbilly.matches++
      if (killer.win === true) {
        this.hillbilly.win++
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
