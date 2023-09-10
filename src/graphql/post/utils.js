export const getPosts =
  (fetch) =>
  (path = "/") => {
    const url = process.env.API_URL + "/posts" + path
    return fetch(url)
  }
