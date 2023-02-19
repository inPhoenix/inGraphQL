import fetch from "node-fetch"

const getUsers = (path = "/") => {
  console.log('%c chamei', 'background: white; color: red', path);
  const response = fetch(`http://localhost:3000/users/${path}`)
  return response
}
const context = () => {
  // all resolver will be access
  return {
    fetch,
    getUsers: getUsers,
  }
}

export default context
