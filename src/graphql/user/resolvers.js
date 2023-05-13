const user = async (_, { id }, { getUsers }) => {
}

const users = async (_, { input }, { getUsers }) => {
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
}
