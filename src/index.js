import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { resolvers, typeDefs } from "./graphql/schema"
import context from "./graphql/context"


async function startServer() {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  })

  const { url } = await startStandaloneServer(server, {
    context: context,
    listen: { port: 4000 },
  })

  console.log("listening on", url)
}

startServer()
