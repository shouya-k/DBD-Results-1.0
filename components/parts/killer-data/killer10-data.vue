<template>
  <tr class="table__tr" v-if="pig.matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer10.png" alt="" />
      ピッグ
    </td>
    <td class="table__td">{{ pig.matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(pig.totalScore / pig.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((pig.win / pig.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER10_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER10_DATA,
  },
  data() {
    return {
      killers: [],
      pig: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.pig.totalScore += Number(killer.score)
        this.pig.matches++
        if (killer.win === true) {
          this.pig.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
