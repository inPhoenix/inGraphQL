import { gql } from "apollo-server"

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts(input: ApiFiltersInput): [Post!]!
  }

  union PostResult = PostNotFoundError | Post # lets not use this
  # this will include the ... on in the Graphql query
  type PostNotFoundError {
    statusCode: Int!
    message: String!
  }

  type Post {
    id: String!
    title: String!
    body: String!
    userId: String!
    indexRef: Int!
    createdAt: String!
    interceptor: String
  }
`
