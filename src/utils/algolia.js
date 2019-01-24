const posts = `
  {
    posts: allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          objectID: id
          frontmatter {
            title
            description
            slug
            tags
            date(formatString: "MMM DD, YYYY")
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }
`

const flatten = (arr) =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

module.exports = [
  {
    query: posts,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'Posts',
    settings,
  },
]
