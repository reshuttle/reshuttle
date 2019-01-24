import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

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
    <Layout active="posts">
      <SEO title={post.frontmatter.title} />
      <Title>{post.frontmatter.title}</Title>
      <Date>{post.frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {process.env.NODE_ENV === 'production' ? (
        <DiscussionEmbed
          shortname="reshuttle"
          config={{
            title: post.frontmatter.title,
            identifier: post.id,
          }}
        />
      ) : null}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
