const posts = [
  { post1: "post11", id: "1" },
  { post2: "post12", id: "2" },
  { post3: "post13", id: "3" },
]

const post = () => {
  return {
    id: "1",
     title: "Post one",
  }
}

export const postResolvers = {
  Query: {
    post,
    posts,
  },
}
