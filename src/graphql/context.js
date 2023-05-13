import fetch from "node-fetch"
import { makeUserDataLoader } from "./user/dataloader"
import { getUsers } from "./user/utils"

const getPosts = (path = "/") => {}

const context = () => {
  // all resolver will be access
  return {}
}

export default context
