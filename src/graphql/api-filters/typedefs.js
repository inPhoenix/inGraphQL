import { gql } from "graphql-tag"

export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: ApiFiltersEnum
    _start: Int
    _limit: Int
  }

  enum ApiFiltersEnum {
    ASC
    DESC
  }
`
