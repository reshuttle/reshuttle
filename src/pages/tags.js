import React from 'react'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import uniq from 'lodash/uniq'

import Layout from '../components/Layout'
import transformColor from '../utils/transformColor'
import flattenArray from '../utils/flattenArray'
import SEO from '../components/SEO'

const Tag = styled(Link)({
  padding: '3px 10px',
  backgroundColor: '#ccc',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '1.5rem',
  marginRight: 10,
  marginBottom: 10,
  cursor: 'pointer',
  color: '#000',
  ':before': {
    content: '"#"',
    marginRight: 5,
  },

  ':hover': {
    backgroundColor: transformColor('#cccccc', 20),
    WebkitTransform: 'translateY(-5px)',
    transform: 'translateY(-5px)',
    textDecoration: 'none',
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
  const tags = uniq(
    flattenArray(
      data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.tags),
    ),
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
          <Tag to={'/tags/' + tag} key={i}>
            {tag}
          </Tag>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { sourceName: { eq: "posts" } }
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
`
