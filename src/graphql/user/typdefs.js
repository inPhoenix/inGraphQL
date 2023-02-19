import { gql } from "apollo-server"

export const userTypeDefs = gql`
  extend type Query {
    user: User!
    users: [User!]!
  }

  type User {
    firstName: String!
    lastName: String!
    userName: String!
    createdAt: String!
    indexRef: ID!
  }
`
