import fetch from "node-fetch"

const getUsers = async () => {
  const response = await fetch("http://localhost:3000/users")
  return response
}
const context = () => {
  // all resolver will be access
  return {
    fetch,
    getUsers,
  }
}

export default context
