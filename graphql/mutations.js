/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResults = /* GraphQL */ `
  mutation CreateResults(
    $input: CreateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    createResults(input: $input, condition: $condition) {
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
export const updateResults = /* GraphQL */ `
  mutation UpdateResults(
    $input: UpdateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    updateResults(input: $input, condition: $condition) {
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
export const deleteResults = /* GraphQL */ `
  mutation DeleteResults(
    $input: DeleteResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    deleteResults(input: $input, condition: $condition) {
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
