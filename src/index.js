import { ApolloServer } from "@apollo/server"
import gql from "graphql-tag"
import { startStandaloneServer } from "@apollo/server/standalone"

const users = [
  { name: "tito", ID: 1 },
  { name: "phoenix", ID: 2 },
]
async function startServer() {
  const server = new ApolloServer({
    typeDefs: gql`
      type Query {
        user: User
        users: [User]!
      }
      type User {
        name: String
        ID: ID
      }
    `,
    resolvers: {
      Query: {
        user: () => ({ name: "tito", ID: 1 }),
        users: () => users,
      },
    },
  })

  const { url } = await startStandaloneServer(server, {
    context: ({ req }) => ({ token: req.headers.token }), // <-- this is the important part
    listen: { port: 4000 },
  })

  console.log("listening on", url)
}

startServer()
