import fetch from "node-fetch"
const user = { username: "username1", id: "1" }


const users = async () => {
  const users = await fetch("http://localhost:3000/users")
  return users.json()
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
}
