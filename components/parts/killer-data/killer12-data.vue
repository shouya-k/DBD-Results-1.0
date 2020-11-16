<template>
  <tr class="table__tr" v-if="spirit.matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer12.png" alt="" />
      スピリット
    </td>
    <td class="table__td">{{ spirit.matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(spirit.totalScore / spirit.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((spirit.win / spirit.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER12_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER12_DATA,
  },
  data() {
    return {
      killers: [],
      spirit: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      for (const killer of this.killers) {
        this.spirit.totalScore += Number(killer.score)
        this.spirit.matches++
        if (killer.win === true) {
          this.spirit.win++
        }
      }
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
