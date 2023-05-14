import { ApolloServer, gql } from "apollo-server"

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String!
      name: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hello world!",
      name: () => "Adrian",
    },
  },
})

server.listen(4003).then(() => {
  console.log("Server is running on port 4003")
})
