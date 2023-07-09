

const posts = async (_, __, { getPosts }) => {
  const post = await getPosts()
  return post.json()
}

const post = async (_, { id }, { getPosts }) => {
  const getPost = await getPosts('/' + id)
  const response = await getPost.json()
  return response

}

export const postResolvers = {
  Query: {
    post,
    posts,
  },
}
