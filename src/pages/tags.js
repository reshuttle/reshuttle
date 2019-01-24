import React from 'react'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import transformColor from '../components/helpers/transformColor'
import { navigate } from 'gatsby'
import SEO from '../components/SEO'
import flattenArray from '../utils/flattenArray'

const Tag = styled.div({
  padding: '3px 10px',
  backgroundColor: '#ccc',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '1.5rem',
  marginRight: 10,
  marginBottom: 10,
  cursor: 'pointer',
  ':before': {
    content: '"#"',
    marginRight: 5,
  },

  ':hover': {
    backgroundColor: transformColor('#cccccc', 20),
    WebkitTransform: 'translateY(-5px)',
    transform: 'translateY(-5px)',
  },

  // Hover float
  WebkitTransform: 'perspective(1px) translateZ(0)',
  transform: 'perspective(1px) translateZ(0)',
  WebkitTransitionDuration: '0.3s',
  transitionDuration: '0.3s',
  WebkitTransitionProperty: 'transform',
  transitionProperty: 'transform',
  WebkitTransitionTimingFunction: 'ease-out',
  transitionTimingFunction: 'ease-out',
})

export default ({ data }) => {
  const tags = flattenArray(
    data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.tags),
  )

  return (
    <Layout active="tags">
      <SEO title="Tags" />
      <h1>Tags</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          marginTop: '1rem',
        }}
      >
        {tags.map((tag, i) => (
          <Tag onClick={() => navigate('/tags/' + tag)} key={i}>
            {tag}
          </Tag>
        ))}
      </div>
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
