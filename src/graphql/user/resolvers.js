import { getUsers } from "./utils"

const users = async (_, __, { getUsers }) => {
  const users = await getUsers()
  return users.json()
}

const user = async (_, { id }, { getUsers }) => {
  const getUser = await getUsers('/' + id)
  const response = await getUser.json()
  return response

}

export const userResolvers = {
  Query: {
    user,
    users,
  },
}
