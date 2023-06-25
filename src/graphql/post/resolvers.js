import DataLoader from "dataloader"
import fetch from "node-fetch"
import gql from "graphql-tag"
export const postResolver = {
  Query: {
    post: () => {
      return {
        title: 'ola',
        id: '1'
      }
    },
    posts: () => [
      { id: "1", title: "t1" },
      { id: "2", title: "t2" },
    ],
  },
}
