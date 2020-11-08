<template>
  <table class="table">
    <tr class="table__header">
      <th class="table__th">対戦キラー</th>
      <th class="table__th">獲得得点</th>
      <th class="table__th">使用パーク</th>
      <th class="table__th">脱出人数</th>
    </tr>

    <tr class="table__tr table__tr--win">
      <td class="table__td table__name">
        <img class="table__img" src="~/assets/img/killer07.png" alt="" />
        カニバル
      </td>
      <td class="table__td">22,014</td>
      <td class="table__td">
        <img class="table__image" src="~/assets/img/park03.png" alt="" />
        <img class="table__image" src="~/assets/img/park01.png" alt="" />
        <img class="table__image" src="~/assets/img/park02.png" alt="" />
        <img class="table__image" src="~/assets/img/park04.png" alt="" />
      </td>
      <td class="table__td">3人</td>
    </tr>
    <tr class="table__tr table__tr--lose">
      <td class="table__td table__name">
        <img class="table__img" src="~/assets/img/killer06.png" alt="" />
        シェイプ
      </td>
      <td class="table__td">8,000</td>
      <td class="table__td">
        <img class="table__image" src="~/assets/img/park03.png" alt="" />
        <img class="table__image" src="~/assets/img/park01.png" alt="" />
        <img class="table__image" src="~/assets/img/park02.png" alt="" />
        <img class="table__image" src="~/assets/img/park04.png" alt="" />
      </td>
      <td class="table__td">1人</td>
    </tr>
    <tr class="table__tr table__tr--win">
      <td class="table__td table__name">
        <img class="table__img" src="~/assets/img/killer12.png" alt="" />
        プレイグ
      </td>
      <td class="table__td">24,108</td>
      <td class="table__td">
        <img class="table__image" src="~/assets/img/park03.png" alt="" />
        <img class="table__image" src="~/assets/img/park01.png" alt="" />
        <img class="table__image" src="~/assets/img/park02.png" alt="" />
        <img class="table__image" src="~/assets/img/park04.png" alt="" />
      </td>
      <td class="table__td">2人</td>
    </tr>
    <tr class="table__tr table__tr--win">
      <td class="table__td table__name">
        <img class="table__img" src="~/assets/img/killer08.png" alt="" />
        ピッグ
      </td>
      <td class="table__td">16,242</td>
      <td class="table__td">
        <img class="table__image" src="~/assets/img/park03.png" alt="" />
        <img class="table__image" src="~/assets/img/park01.png" alt="" />
        <img class="table__image" src="~/assets/img/park02.png" alt="" />
        <img class="table__image" src="~/assets/img/park04.png" alt="" />
      </td>
      <td class="table__td">4人</td>
    </tr>
    <tr class="table__tr table__tr--lose">
      <td class="table__td table__name">
        <img class="table__img" src="~/assets/img/killer18.png" alt="" />
        ナース
      </td>
      <td class="table__td">4,763</td>
      <td class="table__td">
        <img class="table__image" src="~/assets/img/park03.png" alt="" />
        <img class="table__image" src="~/assets/img/park01.png" alt="" />
        <img class="table__image" src="~/assets/img/park02.png" alt="" />
        <img class="table__image" src="~/assets/img/park04.png" alt="" />
      </td>
      <td class="table__td">0人</td>
    </tr>
    <tr class="table__tr table__tr--win">
      <td class="table__td table__name">
        <img class="table__img" src="~/assets/img/killer05.png" alt="" />
        ハントレス
      </td>
      <td class="table__td">19,242</td>
      <td class="table__td">
        <img class="table__image" src="~/assets/img/park03.png" alt="" />
        <img class="table__image" src="~/assets/img/park01.png" alt="" />
        <img class="table__image" src="~/assets/img/park02.png" alt="" />
        <img class="table__image" src="~/assets/img/park04.png" alt="" />
      </td>
      <td class="table__td">3人</td>
    </tr>
    <tr class="table__tr table__tr--lose">
      <td class="table__td table__name">
        <img class="table__img" src="~/assets/img/killer11.png" alt="" />
        リージョン
      </td>
      <td class="table__td">8,003</td>
      <td class="table__td">
        <img class="table__image" src="~/assets/img/park03.png" alt="" />
        <img class="table__image" src="~/assets/img/park01.png" alt="" />
        <img class="table__image" src="~/assets/img/park02.png" alt="" />
        <img class="table__image" src="~/assets/img/park04.png" alt="" />
      </td>
      <td class="table__td">1人</td>
    </tr>
    <tr class="table__tr table__tr--lose">
      <td class="table__td table__name">
        <img class="table__img" src="~/assets/img/killer14.png" alt="" />
        デモゴルゴン
      </td>
      <td class="table__td">13,768</td>
      <td class="table__td">
        <img class="table__image" src="~/assets/img/park03.png" alt="" />
        <img class="table__image" src="~/assets/img/park01.png" alt="" />
        <img class="table__image" src="~/assets/img/park02.png" alt="" />
        <img class="table__image" src="~/assets/img/park04.png" alt="" />
      </td>
      <td class="table__td">1人</td>
    </tr>
    <tr class="table__tr table__tr--lose">
      <td class="table__td table__name">
        <img class="table__img" src="~/assets/img/killer04.png" alt="" />
        ドクター
      </td>
      <td class="table__td">14,763</td>
      <td class="table__td">
        <img class="table__image" src="~/assets/img/park03.png" alt="" />
        <img class="table__image" src="~/assets/img/park01.png" alt="" />
        <img class="table__image" src="~/assets/img/park02.png" alt="" />
        <img class="table__image" src="~/assets/img/park04.png" alt="" />
      </td>
      <td class="table__td">0人</td>
    </tr>
  </table>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.table {
  width: 80%;
  margin: 0 auto 50px;
  font-size: 1.4rem;
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
    position: sticky;
    top: 100px;
    z-index: 1;
    background-image: url('~@/assets/img/bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  &__img {
    width: 50px;
    height: 50px;
    display: flex;
    margin: 0 auto 5px;
  }

  &__image {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }

  &__name {
    font-size: 1.2rem;
  }

  &__td {
    width: 20%;
    padding: 14px 0 7px;
    text-align: center;
    border-bottom: 1px solid #fff;
  }
}
</style>
