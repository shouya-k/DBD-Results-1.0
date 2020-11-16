<template>
  <tr class="table__tr" v-if="ghostface.matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer15.png" alt="" />
      ゴーストフェイス
    </td>
    <td class="table__td">{{ ghostface.matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(ghostface.totalScore / ghostface.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((ghostface.win / ghostface.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER15_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER15_DATA,
  },
  data() {
    return {
      killers: [],
      ghostface: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.ghostface.totalScore += Number(killer.score)
        this.ghostface.matches++
        if (killer.win === true) {
          this.ghostface.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
