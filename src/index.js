import { ApolloServer, gql } from "apollo-server"
const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return "hello"
      },
      hi: () => {
        return "hi"
      },
    },
  },
})

server.listen(4003).then(({ url }) => {
  console.log("hi", url)
})
