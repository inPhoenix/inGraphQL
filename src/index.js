import { ApolloServer } from "apollo-server"
import { resolvers, typedef } from "./graphql/schema"
const server = new ApolloServer({
  typeDefs: typedef,
  resolvers: resolvers,
})

server.listen(4003).then(({ url }) => {
  console.log("hi", url)
})
