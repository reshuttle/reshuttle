const path = require(`path`)

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten,
    )
  }, [])
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // We only care about MarkdownRemark content.
  if (node.internal.type !== 'MarkdownRemark') {
    return
  }

  const fileNode = getNode(node.parent)

  createNodeField({
    node,
    name: 'sourceName',
    value: fileNode.sourceInstanceName,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const posts = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fields: { sourceName: { eq: "posts" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
              author
            }
          }
        }
      }
    }
  `)

  posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/posts/' + node.frontmatter.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.frontmatter.slug,
        author: node.frontmatter.author,
      },
    })
  })

  const tags = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fields: { sourceName: { eq: "posts" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
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

  const contributors = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { sourceName: { eq: "contributors" } } }
      ) {
        edges {
          node {
            frontmatter {
              username
            }
          }
        }
      }
    }
  `)

  contributors.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/contributors/' + node.frontmatter.username,
      component: path.resolve(`./src/templates/contributor.js`),
      context: { username: node.frontmatter.username },
    })
  })
}
