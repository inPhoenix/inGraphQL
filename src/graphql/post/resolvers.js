const post = async (_, { id }, { getPosts }) => {
  const getPost = await getPosts("/" + id)
  const response = await getPost.json()
  return response
}

const posts = async (_, { input }, { getPosts }) => {
  const apiFilters = new URLSearchParams(input)
  const post = await getPosts("/?" + apiFilters)
  return post.json()
}
export const postResolvers = {
  Query: { post, posts },
}
