const user = async (_, { id }, { getUsers }) => {
  return {
    userName: "t1",
    id: "1"
  }
}

const users = async (_, { input }, { getUsers }) => {
  return [{ userName: 't', ID: "1"}]
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
}
