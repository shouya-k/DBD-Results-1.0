<template>
  <tr class="table__tr" v-if="legion.matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer13.png" alt="" />
      リージョン
    </td>
    <td class="table__td">{{ legion.matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(legion.totalScore / legion.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((legion.win / legion.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER13_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER13_DATA,
  },
  data() {
    return {
      killers: [],
      legion: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.legion.totalScore += Number(killer.score)
        this.legion.matches++
        if (killer.win === true) {
          this.legion.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
