import { gql } from "apollo-server"

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts: [Post!]!
  }

  type Post {
    id: String!
    title: String!
    body: String!
    userId: String!
    indexRef: Int!
    createdAt: String!
  }
`
const example = {
  id: "940",
  title:
    "Neon City, Wired Souls.",
  body: "Quidei suscipit.",
  userId: "903",
  indexRef: 12,
  createdAt: "2015-08-28T14:07:58.674Z",
}
