import fetch from "node-fetch"
import { makeUserDataLoader } from "./user/dataloader"
import { getUsers } from "./user/utils"

const getPosts = (path = "/") => {}

const context = () => {
  // all resolver will be access
  return {
    fetch,
    getUsers: (path = '/') => fetch('http://localhost:3000/users' + path),
    getPosts: (path = '/') => fetch('http://localhost:3000/posts' + path),
  }
}

export default context
