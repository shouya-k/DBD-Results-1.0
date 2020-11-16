<template>
  <tr class="table__tr" v-if="trapper.matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer01.png" alt="" />
      トラッパー
    </td>
    <td class="table__td">{{ trapper.matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(trapper.totalScore / trapper.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((trapper.win / trapper.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER01_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER01_DATA,
  },
  data() {
    return {
      killers: [],
      trapper: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.trapper.totalScore += Number(killer.score)
        this.trapper.matches++
        if (killer.win === true) {
          this.trapper.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
