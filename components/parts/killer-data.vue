<template>
  <tr class="table__tr" v-if="matches !== 0">
    <td class="table__td table__name">
      <img class="table__image" :src="img" alt="" />
      {{ name }}
    </td>
    <td class="table__td">{{ matches + '回' }}</td>
    <td class="table__td">
      {{ Math.round(totalScore / matches) }}
    </td>
    <td class="table__td">
      {{ Math.round((win / matches) * 100) + '%' }}
    </td>
  </tr>
</template>

<script>
import { API } from 'aws-amplify'
import { searchResultss } from '../../graphql/queries'
export default {
  props: ['id', 'name', 'img'],
  data() {
    return {
      totalScore: 0,
      matches: 0,
      win: 0
    }
  },
  created() {
    this.getResult(this.id)
  },
  methods: {
    async getResult(id) {
      try {
        const result = await API.graphql({
          query: searchResultss,
          variables: {
            filter: {
              killerId: {
                match: id
              }
            }
          }
        })
        this.result(result.data.searchResultss.items)
      } catch (error) {
        console.log(error)
      }
    },
    result(killers) {
      for (const killer of killers) {
        this.totalScore += Number(killer.score)
        this.matches++
        if (killer.win === true) {
          this.win++
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/_killer-data';
</style>
