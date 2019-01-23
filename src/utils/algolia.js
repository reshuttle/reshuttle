const articlesQuery = `
  {
    articles: allMarkdownRemark(
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
    query: articlesQuery,
    transformer: ({ data }) => flatten(data.articles.edges),
    indexName: 'Articles',
    settings,
  },
]
