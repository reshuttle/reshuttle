import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

const HeaderTitle = styled.h1({
  textAlign: 'center',
  svg: { fontSize: '2rem' },
})
const HeaderSubtitle = styled.p({
  textAlign: 'center',
  marginTop: 0,
})

const Divider = styled.hr({
  marginLeft: 130,
  marginRight: 130,
  marginTop: '3rem',
  marginBottom: '3rem',
})

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Launch your app faster than ever" />
      <div style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
        <HeaderTitle>Launch your apps 🚀 faster than ever ⚡</HeaderTitle>
        <HeaderSubtitle>
          Reshuttle is a platform for learning and sharing about web
          technologies for those who want to build and launch high-quality apps
        </HeaderSubtitle>
      </div>
      <Divider />
      <HeaderTitle>
        <FontAwesomeIcon icon={faTrophy} /> Top posts
      </HeaderTitle>
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
            <PostCard {...node.frontmatter} />
          </div>
        ))}
      </div>
      <Divider />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          flexDirection: 'column',
          marginTop: '3rem',
        }}
      >
        <p style={{ fontSize: '1rem', marginBottom: 10 }}>Copyright © 2019</p>
        {/* <p style={{ fontSize: '1rem', marginTop: 0 }}>
          Build with ❤️ by Rahman Fadhil
        </p> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 4
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
