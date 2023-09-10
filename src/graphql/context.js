import { getUsers } from "./user/utils"
import fetch from "node-fetch"
import { makeUserDataLoader } from "./user/dataloaders"
import { getPosts } from "./post/utils"

const context = () => {
  // all resolver will be access
  return {
    userDataLoader: makeUserDataLoader(getUsers(fetch)),
    getUsers: getUsers(fetch),
    getPosts: getPosts(fetch),
  }
}

export default context
