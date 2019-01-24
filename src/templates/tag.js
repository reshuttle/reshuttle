import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ArticleCard from '../components/ArticleCard'
import styled from '@emotion/styled'

const Title = styled.h1({
  padding: 15,
  textTransform: 'capitalize',
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
  const articles = data.allMarkdownRemark.edges

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
        {articles.map(({ node }, i) => (
          <div key={i}>
            <ArticleCard {...node.frontmatter} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tag } } }) {
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
