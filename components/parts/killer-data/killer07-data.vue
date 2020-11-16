<template>
  <tr class="table__tr" v-if="huntress.matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer07.png" alt="" />
      ハントレス
    </td>
    <td class="table__td">{{ huntress.matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(huntress.totalScore / huntress.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((huntress.win / huntress.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER07_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER07_DATA,
  },
  data() {
    return {
      killers: [],
      huntress: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.huntress.totalScore += Number(killer.score)
        this.huntress.matches++
        if (killer.win === true) {
          this.huntress.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
