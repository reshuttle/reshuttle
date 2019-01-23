import React from 'react'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

const Tag = styled.span({
  padding: '3px 10px',
  backgroundColor: '#ccc',
  fontFamily: "'IBM Plex Mono', monospace",
  marginRight: 10,
})

export default ({ data }) => {
  const tags = data.allMarkdownRemark.edges
    .map(({ node }) => node.frontmatter.tags)
    .flat()
  console.log(tags)

  return (
    <Layout active="tags">
      {tags.map((tag, i) => (
        <Tag key={i}>#{tag}</Tag>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
