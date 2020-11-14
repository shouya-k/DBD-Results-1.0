<template>
  <tr class="table__tr">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer04.png" alt="" />
      ナース
    </td>
    <td class="table__td">{{ nurse.matches }}</td>
    <td class="table__td">
      {{ Math.round(nurse.totalScore / nurse.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((nurse.win / nurse.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER04_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER04_DATA,
  },
  data() {
    return {
      killers: [],
      nurse: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.nurse.totalScore += Number(killer.score)
        this.nurse.matches++
        if (killer.win === true) {
          this.nurse.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
