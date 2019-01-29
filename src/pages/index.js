import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import transformColor from '../components/helpers/transformColor'

const HeaderTitle = styled.h1(({ small }) => ({
  textAlign: 'center',
  fontSize: small ? '2.1rem' : '2.5rem',
  svg: { fontSize: '2rem' },
}))

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

const EmailInput = styled.input({
  padding: 15,
  marginRight: '1.5rem',
  border: 'none',
  backgroundColor: 'transparent',
  borderBottom: '2px solid #ccc',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '1.2rem',
  width: 250,
  outline: 0,
  ':focus': {
    borderBottom: '2px solid #ff642e',
  },
})

const EmailButton = styled.button({
  backgroundColor: '#ff642e',
  border: 'none',
  padding: '0 1.5rem',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '1.2rem',
  color: '#fff',
  cursor: 'pointer',
  outline: 'none',
  ':hover': {
    backgroundColor: transformColor('#ff642e', 20),
  },
  ':active': {
    backgroundColor: transformColor('#ff642e', 40),
  },
})

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Launch your app faster than ever" />
      <div style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
        <HeaderTitle>Launch your apps 🚀 faster than ever ⚡</HeaderTitle>
        <HeaderSubtitle>
          Reshuttle is a platform for{' '}
          <b>learning and sharing about web technologies</b> for those who want
          to build and launch high-quality apps
        </HeaderSubtitle>
      </div>
      <Divider />
      <HeaderTitle small>Top posts 🏆</HeaderTitle>
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
      <div style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
        <HeaderTitle small>Free updates every week 🔔</HeaderTitle>
        <HeaderSubtitle>
          Subscribe to our newsletter to recieve future interesting updates.
        </HeaderSubtitle>
      </div>
      <form action="/" name="subscribe" method="post" data-netlify="true">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <EmailInput type="text" name="name" placeholder="Your Name" />
          <EmailInput type="email" name="email" placeholder="Your E-Mail" />
          <EmailButton type="submit">Subscribe</EmailButton>
        </div>
      </form>
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
        <p style={{ fontSize: '1rem', margin: 0 }}>Copyright © 2019</p>
        <p style={{ fontSize: '1rem', marginTop: 0 }}>
          Build with <FontAwesomeIcon icon={faReact} /> by{' '}
          <a href="https://github.com/rahmanfadhil">Rahman Fadhil</a>
        </p>
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
