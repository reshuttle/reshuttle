import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { Formik } from 'formik'
import axios from 'axios'

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
  padding: '15px 20px',
  marginRight: 20,
  border: 0,
  backgroundColor: 'transparent',
  outline: 0,
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '1.1rem',
  borderBottom: '2px solid #ccc',
  '@media (max-width: 768px)': { margin: '0 0 20px 0', width: '100%' },
  ':focus': { borderBottom: '2px solid #ff642e' },
})

const EmailButton = styled.button({
  border: 0,
  backgroundColor: '#ff642e',
  color: '#fff',
  padding: '15px 20px',
  fontFamily: "'IBM Plex Mono', monospace",
  outline: 0,
  fontSize: '1.1rem',
  cursor: 'pointer',
  '@media (max-width: 768px)': { width: '100%' },
  ':hover': { backgroundColor: transformColor('#ff642e', 20) },
  ':active': { backgroundColor: transformColor('#ff642e', 40) },
})

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

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
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={async (values) => {
          const data = await axios.post(
            '/',
            encode({ 'form-name': 'subscribe', ...values }),
            {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            },
          )
          console.log(data)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <form name="subscribe" netlify="true" onSubmit={handleSubmit}>
            <HeaderTitle small>Subscribe to our Newsletter 📰</HeaderTitle>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <EmailInput
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <EmailInput
                type="email"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <EmailButton type="submit">Subscribe</EmailButton>
            </div>
          </form>
        )}
      </Formik>
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
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { sourceName: { eq: "posts" } }
      }
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
