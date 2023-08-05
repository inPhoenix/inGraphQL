const post = async (_, { id }, { getPosts }) => {
  const getPost = await getPosts("/" + id)
  const response = await getPost.json()
  console.log("%c response", "background: white; color: red", response)

  if (typeof response.id === "undefined") {
    return {
      statusCode: 404,
      message: "Post Not Found",
    }
  }
  return response
}

const posts = async (_, { input }, { getPosts }) => {
  const apiFilters = new URLSearchParams(input)
  const post = await getPosts("/?" + apiFilters)
  return post.json()
}
export const postResolvers = {
  Query: { post, posts },
  // Post: {
  //   unixTimestamp: ({ createdAt }) => {
  //     const timestamp = new Date(createdAt).getTime() / 1000
  //     return Math.floor(timestamp)
  //   },
  // },
  PostResult: {
    __resolveType: ({ statusCode, id }) => {
      if (statusCode === 404) {
        return "PostNotFoundError"
      }
      if (id !== undefined) {
        return "Post"
      }
      return null
    },
  },
}
