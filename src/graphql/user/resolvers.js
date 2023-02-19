const users = [
  { username: "username1", id: "1" },
  { username: "username2", id: "2" },
  { username: "username3", id: "3" },
]

const user = () => {
  return {
    username: "username1",
    id: "1123",
  }
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
}
