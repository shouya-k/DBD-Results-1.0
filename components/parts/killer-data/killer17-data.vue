<template>
  <tr class="table__tr">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer17.png" alt="" />
      鬼
    </td>
    <td class="table__td">{{ oni.matches }}</td>
    <td class="table__td">
      {{ Math.round(oni.totalScore / oni.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((oni.win / oni.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER17_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER17_DATA,
  },
  data() {
    return {
      killers: [],
      oni: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    for (const killer of this.killers) {
      this.oni.totalScore += Number(killer.score)
      this.oni.matches++
      if (killer.win === true) {
        this.oni.win++
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
