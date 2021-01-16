<template>
  <form class="form" @submit.prevent="addResult">
    <table class="table">
      <tr class="table__header">
        <th class="table__th">対戦キラー</th>
        <th class="table__th">獲得得点</th>
        <th class="table__th">使用パーク</th>
        <th class="table__th">脱出人数</th>
      </tr>
      <tr class="table__tr">
        <td class="table__td table__name" @click="showKillerModal">
          <img class="table__img" :src="results.killerImage" alt="" />
          {{ results.killerName }}
        </td>
        <td class="table__td">
          <input v-model="results.score" class="table__input" type="text" />
        </td>
        <td class="table__td">
          <img class="table__image" :src="results.parkImage01" @click="showPark01Modal" />
          <img class="table__image" :src="results.parkImage02" @click="showPark02Modal" />
          <img class="table__image" :src="results.parkImage03" @click="showPark03Modal" />
          <img class="table__image" :src="results.parkImage04" @click="showPark04Modal" />
        </td>
        <td class="table__td">
          <select v-model="results.escape" class="table__select" @change="winLose($event)">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </td>
      </tr>
    </table>
    <input class="form__submit" type="submit" value="登録" />
    <KillerModal
      :isHidden="killerHidden"
      @hiddenModal="hiddenKillerModal"
      @killerSelect="select($event)"
    />
    <ParkModal
      :isHidden="park01Hidden"
      @hiddenModal="hiddenPark01Modal"
      @parkSelect="park01Select($event)"
    />
    <ParkModal
      :isHidden="park02Hidden"
      @hiddenModal="hiddenPark02Modal"
      @parkSelect="park02Select($event)"
    />
    <ParkModal
      :isHidden="park03Hidden"
      @hiddenModal="hiddenPark03Modal"
      @parkSelect="park03Select($event)"
    />
    <ParkModal
      :isHidden="park04Hidden"
      @hiddenModal="hiddenPark04Modal"
      @parkSelect="park04Select($event)"
    />
  </form>
</template>

<script>
import { API } from 'aws-amplify'
import { createResults } from '../../graphql/mutations'
import KillerModal from '~/components/parts/killer-modal'
import ParkModal from '~/components/parts/park-modal'
export default {
  components: {
    KillerModal,
    ParkModal
  },
  data() {
    return {
      results: {
        killerId: '',
        killerName: '',
        killerImage: null,
        score: '',
        parkImage01: null,
        parkImage02: null,
        parkImage03: null,
        parkImage04: null,
        escape: '',
        win: true,
        lose: false
      },
      killerHidden: true,
      park01Hidden: true,
      park02Hidden: true,
      park03Hidden: true,
      park04Hidden: true
    }
  },
  mounted() {
    if (localStorage.parkImage01) {
      this.results.parkImage01 = localStorage.parkImage01
    }
    if (localStorage.parkImage02) {
      this.results.parkImage02 = localStorage.parkImage02
    }
    if (localStorage.parkImage03) {
      this.results.parkImage03 = localStorage.parkImage03
    }
    if (localStorage.parkImage04) {
      this.results.parkImage04 = localStorage.parkImage04
    }
  },
  methods: {
    winLose(event) {
      if (event.target.value <= 1) {
        this.results.win = false
        this.results.lose = true
      } else {
        this.results.win = true
        this.results.lose = false
      }
    },
    async addResult() {
      try {
        await API.graphql({
          query: createResults,
          variables: {
            input: this.results
          }
        })
        location.replace('/result')
      } catch (error) {
        console.log(error)
      }
    },
    showKillerModal() {
      this.killerHidden = false
    },
    hiddenKillerModal() {
      this.killerHidden = true
    },
    select(event) {
      this.killerHidden = true
      this.results.killerImage = event.url
      this.results.killerName = event.name
      this.results.killerId = event.id
    },
    showPark01Modal() {
      this.park01Hidden = false
    },
    showPark02Modal() {
      this.park02Hidden = false
    },
    showPark03Modal() {
      this.park03Hidden = false
    },
    showPark04Modal() {
      this.park04Hidden = false
    },
    hiddenPark01Modal() {
      this.park01Hidden = true
    },
    hiddenPark02Modal() {
      this.park02Hidden = true
    },
    hiddenPark03Modal() {
      this.park03Hidden = true
    },
    hiddenPark04Modal() {
      this.park04Hidden = true
    },
    park01Select(img) {
      this.park01Hidden = true
      this.results.parkImage01 = img
      localStorage.parkImage01 = img
    },
    park02Select(img) {
      this.park02Hidden = true
      this.results.parkImage02 = img
      localStorage.parkImage02 = img
    },
    park03Select(img) {
      this.park03Hidden = true
      this.results.parkImage03 = img
      localStorage.parkImage03 = img
    },
    park04Select(img) {
      this.park04Hidden = true
      this.results.parkImage04 = img
      localStorage.parkImage04 = img
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  &__submit {
    width: 20%;
    display: block;
    margin: 0 auto 25px;
    padding: 10px 0;
    font-size: 2rem;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    border: 2px solid #fff;
    border-radius: 6px;

    &:hover {
      background-color: #fff;
      color: black;
    }
  }
}

.table {
  width: 80%;
  margin: 120px auto 70px;
  font-size: 2rem;
  color: #fff;

  &__tr--win {
    background-color: rgba(255, 0, 0, 0.2);
  }
  &__tr--lose {
    background-color: rgba(0, 0, 255, 0.2);
  }

  &__th {
    width: 20%;
    padding: 0 0 20px;
    text-align: center;
    border-bottom: 1px solid #fff;
  }

  &__img {
    width: 60px;
    height: 60px;
    display: flex;
    margin: 0 auto 5px;
  }

  &__image {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 1px solid #fff;
  }

  &__name {
    font-size: 1.6rem;
  }

  &__input {
    width: 50%;
    font-size: 2rem;
    padding: 10px 0;
    outline: none;
    text-align: center;
  }

  &__select {
    font-size: 1.6rem;
    padding: 10px 0;
    outline: none;
  }

  &__td {
    width: 20%;
    padding: 28px 0 14px;
    text-align: center;
    border-bottom: 1px solid #fff;
  }
}
</style>
