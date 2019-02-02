import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostCard from '../components/PostCard'

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout active="posts">
      <SEO title="Posts" />
      <h1>Latest posts</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: '1rem',
        }}
      >
        {posts.map(({ node }, i) => (
          <div key={i}>
            <PostCard {...node.frontmatter} />
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
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { sourceName: { eq: "posts" } }
      }
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
