/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResults = /* GraphQL */ `
  query GetResults($id: ID!) {
    getResults(id: $id) {
      id
      killerId
      killerName
      score
      killerImage
      parkImage01
      parkImage02
      parkImage03
      parkImage04
      escape
      win
      lose
      createdAt
      updatedAt
    }
  }
`;
export const listResultss = /* GraphQL */ `
  query ListResultss(
    $filter: ModelResultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResultss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        killerId
        killerName
        score
        killerImage
        parkImage01
        parkImage02
        parkImage03
        parkImage04
        escape
        win
        lose
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchResultss = /* GraphQL */ `
  query SearchResultss(
    $filter: SearchableResultsFilterInput
    $sort: SearchableResultsSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchResultss(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        killerId
        killerName
        score
        killerImage
        parkImage01
        parkImage02
        parkImage03
        parkImage04
        escape
        win
        lose
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
