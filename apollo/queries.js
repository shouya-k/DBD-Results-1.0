import gql from 'graphql-tag'

export const ADD__RESULT = gql`
  mutation(
    $killerName: String!
    $killerImage: String!
    $score: String!
    $parkImage01: String!
    $parkImage02: String!
    $parkImage03: String!
    $parkImage04: String!
    $escape: String!
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
    }
  }
`
