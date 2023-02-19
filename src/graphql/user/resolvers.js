const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers(id)
  const user = await response.json()
  console.log('%c user', 'background: white; color: red', user);
  return user
}

const users = async (_, __, { getUsers }) => {
  const response = await getUsers()
  return response.json()
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
}
