import gql from 'graphql-tag'

export const RESULT_LIST = gql`
  query {
    results {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`

export const ADD_RESULT = gql`
  mutation(
    $killerName: String!
    $killerImage: String!
    $score: String!
    $parkImage01: String!
    $parkImage02: String!
    $parkImage03: String!
    $parkImage04: String!
    $escape: String!
    $win: Boolean!
    $lose: Boolean!
  ) {
    addResult(
      killerName: $killerName
      killerImage: $killerImage
      score: $score
      parkImage01: $parkImage01
      parkImage02: $parkImage02
      parkImage03: $parkImage03
      parkImage04: $parkImage04
      escape: $escape
      win: $win
      lose: $lose
    ) {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`

export const KILLER01_DATA = gql`
  query {
    killers(killerName: "トラッパー") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`

export const KILLER02_DATA = gql`
  query {
    killers(killerName: "レイス") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`

export const KILLER03_DATA = gql`
  query {
    killers(killerName: "ヒルビリー") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`

export const KILLER04_DATA = gql`
  query {
    killers(killerName: "ナース") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`

export const KILLER05_DATA = gql`
  query {
    killers(killerName: "ハグ") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER06_DATA = gql`
  query {
    killers(killerName: "ドクター") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER07_DATA = gql`
  query {
    killers(killerName: "ハントレス") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`

export const KILLER08_DATA = gql`
  query {
    killers(killerName: "シェイプ") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`

export const KILLER09_DATA = gql`
  query {
    killers(killerName: "カニバル") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER10_DATA = gql`
  query {
    killers(killerName: "ピッグ") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER11_DATA = gql`
  query {
    killers(killerName: "クラウン") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER12_DATA = gql`
  query {
    killers(killerName: "スピリット") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`

export const KILLER13_DATA = gql`
  query {
    killers(killerName: "リージョン") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER14_DATA = gql`
  query {
    killers(killerName: "プレイグ") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER15_DATA = gql`
  query {
    killers(killerName: "ゴスフェ") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER16_DATA = gql`
  query {
    killers(killerName: "デモゴルゴン") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER17_DATA = gql`
  query {
    killers(killerName: "鬼") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
export const KILLER18_DATA = gql`
  query {
    killers(killerName: "エクセ") {
      id
      killerName
      killerImage
      score
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
    }
  }
`
