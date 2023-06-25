import gql from "graphql-tag"
import { userTypeDefs } from "./user/typdefs"
import { userResolvers } from "./user/resolvers"

export const rootTypeDefs = gql`
  type Query {
    hi: String
  }
`

const rootResolvers = {
  Query: {
    hi: () => "Hi Again",
  },
}

export const typeDefs = [rootTypeDefs, userTypeDefs]
export const resolvers = [rootResolvers, userResolvers]
