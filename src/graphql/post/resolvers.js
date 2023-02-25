const post = async (_, { id }, { getPosts }) => {
  const res = await getPosts(id)
  return res.json()
}

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input)
  const res = await getPosts('/?' + apiFiltersInput)
  return res.json()
}

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    interceptor: ({ userId }) => {
      console.log("intercept", userId)
      return `userId Is ${userId}`
    },
  },
}
