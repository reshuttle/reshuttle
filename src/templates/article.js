import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <img
        src={post.frontmatter.thumbnail}
        width="100%"
        style={{ boxShadow: '0 0 10px #444C5E', borderRadius: 10 }}
        alt={post.frontmatter.title}
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        thumbnail
      }
      html
    }
  }
`
