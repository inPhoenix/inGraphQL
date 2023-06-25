import gql from "graphql-tag"

export const userTypeDefs = gql`
  extend type Query {
    user: User
    users: [User]
  }
  type User {
    userName: String
    ID: String
  }
`
