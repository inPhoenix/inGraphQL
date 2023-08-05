import gql from "graphql-tag"
import { userTypeDefs } from "./user/typdefs"
import { userResolvers } from "./user/resolvers"
import { postReducer, postResolvers } from "./post/resolvers"
import { postTypeDefs } from "./post/typdefs"
import { apiFiltersTypeDefs } from "./api-filters/typedefs"

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

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
]
export const resolvers = [rootResolvers, userResolvers, postResolvers]
