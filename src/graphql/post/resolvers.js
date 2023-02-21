const posts = async (_, __, { getPosts }) => {
  const res = await getPosts()
  return res.json()
}

const post = async (_, { id }, { getPosts }) => {
  const res = await getPosts(id)
  return res.json()
}

export const postResolvers = {
  Query: {
    post,
    posts,
  },
}
