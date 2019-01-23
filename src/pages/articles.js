import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import ArticleCard from '../components/ArticleCard'

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout active="articles">
      <h1>Latest articles</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: '3rem',
        }}
      >
        {posts.map(({ node }, i) => (
          <div key={i}>
            <ArticleCard {...node.frontmatter} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            tags
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
