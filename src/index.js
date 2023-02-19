import { ApolloServer } from "apollo-server"
import { resolvers, typedef } from "./graphql/schema"
import context from "./graphql/context"

const server = new ApolloServer({
  typeDefs: typedef,
  resolvers: resolvers,
  context: context(),
})

server.listen(4003).then(({ url }) => {
  console.log("hi", url)
})
