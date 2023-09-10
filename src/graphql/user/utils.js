const userUrl = process.env.API_URL
export const getUsers =
  (fetch) =>
  (path = "/") => {
    return fetch(userUrl + "/users" + path)
  }
