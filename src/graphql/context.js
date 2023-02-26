import fetch from "node-fetch"
import { makeUserDataLoader } from "./user/dataloader"
import {getUsers} from "./user/utils";

const getPosts = (path = "/") => {
  console.log("%c posts", "background: white; color: red", path)
  const res = fetch(`http://localhost:3000/posts/${path}`)
  return res
}

const context = () => {
  // all resolver will be access
  return {
    fetch,
    userDataLoader: makeUserDataLoader(() => getUsers(fetch())),
    getUsers: getUsers(fetch),
    getPosts,
  }
}

export default context
