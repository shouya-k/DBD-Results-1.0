<template>
  <tr class="table__tr">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer06.png" alt="" />
      ドクター
    </td>
    <td class="table__td">{{ doctor.matches }}</td>
    <td class="table__td">
      {{ Math.round(doctor.totalScore / doctor.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((doctor.win / doctor.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER06_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER06_DATA,
  },
  data() {
    return {
      killers: [],
      doctor: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.doctor.totalScore += Number(killer.score)
        this.doctor.matches++
        if (killer.win === true) {
          this.doctor.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
