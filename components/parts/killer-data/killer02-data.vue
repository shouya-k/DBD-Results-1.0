<template>
  <tr class="table__tr">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer02.png" alt="" />
      レイス
    </td>
    <td class="table__td">{{ wraith.matches }}</td>
    <td class="table__td">
      {{ Math.round(wraith.totalScore / wraith.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((wraith.win / wraith.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER02_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER02_DATA,
  },
  data() {
    return {
      killers: [],
      wraith: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.wraith.totalScore += Number(killer.score)
        this.wraith.matches++
        if (killer.win === true) {
          this.wraith.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
