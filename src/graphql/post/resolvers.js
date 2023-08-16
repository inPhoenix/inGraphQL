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

const user = async ({ userId }, _, { getUsers }) => {
  const response = await getUsers("/" + userId)

  console.log("%c parent", "background: white; color: red")
  return response.json()
}

export const postResolvers = {
  Query: { post, posts },
  Post: { user },
}
