import { gql } from "graphql-tag"

export const postTypeDefs = gql`
  extend type Query {
    post: Post!
    posts: [Post]
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
