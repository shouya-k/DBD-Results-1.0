<template>
  <tr class="table__tr">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer09.png" alt="" />
      カニバル
    </td>
    <td class="table__td">{{ cannibal.matches }}</td>
    <td class="table__td">
      {{ Math.round(cannibal.totalScore / cannibal.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((cannibal.win / cannibal.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER09_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER09_DATA,
  },
  data() {
    return {
      killers: [],
      cannibal: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.cannibal.totalScore += Number(killer.score)
        this.cannibal.matches++
        if (killer.win === true) {
          this.cannibal.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
