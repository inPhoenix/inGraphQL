import { gql } from "graphql-tag"

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): PostResult!
    posts(input: ApiFiltersInput): [Post]
  }

  union PostResult = Post | PostNotFoundError

  interface PostError {
    statusCode: Int!
    message: String!
  }
  type PostNotFoundError implements PostError {
    statusCode: Int!
    message: String!
  }

  type Post {
    id: ID!
    title: String
    body: String
    createdAt: String
    indexRef: Int
    #user: User
  }
`
