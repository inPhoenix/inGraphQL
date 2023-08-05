import gql from "graphql-tag"

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInput): [User]
  }
  type User {
    firstName: String
    lastName: String
    userName: String
    ID: ID!
    indexRef: Int
    createdAt: String
    #posts: [Post]
  }
`
