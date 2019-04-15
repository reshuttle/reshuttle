import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Title, Anchor, Text } from '../components/Partials/Typography'

const PostTitle = styled(Title)({
  marginBottom: 0,
})

const Date = styled(Text)({
  marginTop: 10,
  marginBottom: '3rem',
  color: '#454545',
  fontSize: '1.1rem',
})

export default ({ data }) => {
  const { post, author } = data

  return (
    <Layout active="posts">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        keywords={post.frontmatter.tags}
      />

      <PostTitle>{post.frontmatter.title}</PostTitle>
      <Date>
        <Anchor to={`/contributors/${author.frontmatter.username}`}>
          {author.frontmatter.name}
        </Anchor>{' '}
        - {post.frontmatter.date}
      </Date>
      <div dangerouslySetInnerHTML={{ __html: post.html }} id="post-content" />
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
  query($slug: String!, $author: String!) {
    post: markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fields: { sourceName: { eq: "posts" } }
    ) {
      id
      html
      frontmatter {
        title
        tags
        description
        date(formatString: "DD MMMM, YYYY")
      }
    }

    author: markdownRemark(
      frontmatter: { username: { eq: $author } }
      fields: { sourceName: { eq: "contributors" } }
    ) {
      frontmatter {
        name
        username
      }
    }
  }
`
