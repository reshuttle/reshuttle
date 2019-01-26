import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import styled from '@emotion/styled'
import PostCard from '../components/PostCard'

const Title = styled.h1({
  padding: 15,
  backgroundColor: '#ccc',
  display: 'inline-block',
  fontFamily: "'IBM Plex Mono', monospace",
  fontWeight: 400,
  ':before': {
    content: '"#"',
    marginRight: 7,
  },
})

export default ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout active="tags">
      <Title>{pageContext.tag}</Title>
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
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag }, published: { eq: true } } }
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
