import { gql } from "apollo-server"
import { userTypeDefs } from "./user/typdefs"
import { userResolvers } from "./user/resolvers"
import { postTypeDefs } from "./post/typdefs"
import { postResolvers } from "./post/resolvers"
import { apiFiltersTypeDefs } from "./api-filters/typedefs"

const rootTypeDefs = gql`
  type Query {
    hi: String
  }
`

const rootResolvers = {
  Query: {
    hi: () => {
      return "hi root"
    },
  },
}

export const typedef = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
]
export const resolvers = [rootResolvers, userResolvers, postResolvers]
