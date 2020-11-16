<template>
  <tr class="table__tr" v-if="plague.matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer14.png" alt="" />
      プレイグ
    </td>
    <td class="table__td">{{ plague.matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(plague.totalScore / plague.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((plague.win / plague.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER14_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER14_DATA,
  },
  data() {
    return {
      killers: [],
      plague: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.plague.totalScore += Number(killer.score)
        this.plague.matches++
        if (killer.win === true) {
          this.plague.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
