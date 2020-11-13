<template>
  <tr class="table__tr">
    <td class="table__td table__name">
      <img class="table__image" src="~/assets/img/killer/killer08.png" alt="" />
      シェイプ
    </td>
    <td class="table__td">{{ shape.matches }}</td>
    <td class="table__td">
      {{ Math.round(shape.totalScore / shape.matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((shape.win / shape.matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { KILLER08_DATA } from '~/apollo/queries'
export default {
  apollo: {
    killers: KILLER08_DATA,
  },
  data() {
    return {
      killers: [],
      shape: {
        totalScore: 0,
        matches: 0,
        win: 0,
      },
    }
  },
  mounted() {
    for (const killer of this.killers) {
      this.shape.totalScore += Number(killer.score)
      this.shape.matches++
      if (killer.win === true) {
        this.shape.win++
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
