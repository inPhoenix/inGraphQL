import dataLoader from "dataloader"
import fetch from 'node-fetch'

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

const userDataLoader = new dataLoader(async (ids) => {
  const urlQuery = id.join("&id=")
  const url = 'http://localhost:3000/users/?id=' + urlQuery
  const response = await fetch(url)
  const users = await response.json()
  return ids.map(id => users.find(user => user.id === id) || new Error(`No result for ${id}`))
})

const user = async ({ userId }, _, { getUsers }) => {
  return userDataLoader.load(userId)
  // const response = await getUsers("/" + userId)
  //
  // console.log("%c parent", "background: white; color: red")
  // return response.json()
}

export const postResolvers = {
  Query: { post, posts },
  Post: { user },
}
