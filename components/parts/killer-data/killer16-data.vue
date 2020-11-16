<template>
  <tr class="table__tr" v-if="demogorgon.matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer16.png" alt="" />
      デモゴルゴン
    </td>
    <td class="table__td">{{ demogorgon.matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(demogorgon.totalScore / demogorgon.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((demogorgon.win / demogorgon.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER16_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER16_DATA,
  },
  data() {
    return {
      killers: [],
      demogorgon: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.demogorgon.totalScore += Number(killer.score)
        this.demogorgon.matches++
        if (killer.win === true) {
          this.demogorgon.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
