import fetch from "node-fetch"

const getUsers = (path = "/") => {
  console.log('%c users', 'background: white; color: red', path);
  const res = fetch(`http://localhost:3000/users/${path}`)
  return res
}

const getPosts = (path = "/") => {
  console.log('%c posts', 'background: white; color: red', path);
  const res = fetch(`http://localhost:3000/posts/${path}`)
  return res
}

const context = () => {
  // all resolver will be access
  return {
    fetch,
    getUsers: getUsers,
    getPosts
  }
}

export default context
