import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from '@emotion/styled'

const Title = styled.h1({
  marginBottom: 0,
  marginTop: '2rem',
})

const Date = styled.p({
  marginTop: 10,
  marginBottom: '3rem',
  color: '#454545',
  fontSize: '1.1rem',
})

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout active="articles">
      <Title>{post.frontmatter.title}</Title>
      <Date>{post.frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      html
      htmlAst
    }
  }
`
