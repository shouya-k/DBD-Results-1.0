<template>
  <tr class="table__tr">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer05.png" alt="" />
      ハグ
    </td>
    <td class="table__td">{{ hag.matches }}</td>
    <td class="table__td">
      {{ Math.round(hag.totalScore / hag.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((hag.win / hag.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER05_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER05_DATA,
  },
  data() {
    return {
      killers: [],
      hag: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    for (const killer of this.killers) {
      this.hag.totalScore += Number(killer.score)
      this.hag.matches++
      if (killer.win === true) {
        this.hag.win++
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
