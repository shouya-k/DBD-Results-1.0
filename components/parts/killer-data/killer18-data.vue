<template>
  <tr class="table__tr" v-if="executioner.matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer18.png" alt="" />
      エクセキューショナー
    </td>
    <td class="table__td">{{ executioner.matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(executioner.totalScore / executioner.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((executioner.win / executioner.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER18_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER18_DATA,
  },
  data() {
    return {
      killers: [],
      executioner: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.executioner.totalScore += Number(killer.score)
        this.executioner.matches++
        if (killer.win === true) {
          this.executioner.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
