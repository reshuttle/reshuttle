const path = require(`path`)

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten,
    )
  }, [])
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const articles = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  articles.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  const tags = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  const allTags = flatten(
    tags.data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.tags),
  )

  allTags.forEach((tag) => {
    createPage({
      path: '/tags/' + tag,
      component: path.resolve(`./src/templates/tag.js`),
      context: { tag },
    })
  })
}
