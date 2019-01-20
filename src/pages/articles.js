import React from 'react'
import Layout from '../components/Layout'
import { graphql, push } from 'gatsby'
import styled from '@emotion/styled'
import transformColor from '../components/helpers/transformColor'

const ArticleCard = styled.div({
  width: 450,
  backgroundColor: transformColor('#f5f0e5', -13),
  boxShadow: '0 0 10px ' + transformColor('#f5f0e5', -13),
  ':hover': {
    backgroundColor: transformColor('#f5f0e5', -20),
    WebkitTransform: 'translateY(-8px)',
    transform: 'translateY(-8px)',
  },
  marginBottom: '2rem',
  cursor: 'pointer',

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

const ArticleCardImage = styled.img({
  width: '100%',
})

const ArticleCardContent = styled.div({
  padding: 20,
})

const ArticleCardTitle = styled.h3({
  marginTop: 0,
  marginBottom: '0.3rem',
  textDecoration: 'none',
  color: '#000',
})

const ArticleCardDate = styled.p({
  margin: 0,
  color: '#454545',
  fontSize: '1.1rem',
})

const ArticleCardDescription = styled.p({
  margin: 0,
  marginTop: '1.5rem',
  color: '#454545',
  fontSize: '1.1rem',
})

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {posts.map(({ node }) => (
          <>
            <ArticleCard onClick={() => push(node.frontmatter.path)}>
              <ArticleCardImage src={node.frontmatter.thumbnail} />
              <ArticleCardContent>
                <ArticleCardTitle>{node.frontmatter.title}</ArticleCardTitle>
                <ArticleCardDate>{node.frontmatter.date}</ArticleCardDate>
                <ArticleCardDescription>
                  {node.frontmatter.description}
                </ArticleCardDescription>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <ArticleCardImage src={node.frontmatter.thumbnail} />
              <ArticleCardContent>
                <ArticleCardTitle>{node.frontmatter.title}</ArticleCardTitle>
                <ArticleCardDate>{node.frontmatter.date}</ArticleCardDate>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <ArticleCardImage src={node.frontmatter.thumbnail} />
              <ArticleCardContent>
                <ArticleCardTitle>{node.frontmatter.title}</ArticleCardTitle>
                <ArticleCardDate>{node.frontmatter.date}</ArticleCardDate>
              </ArticleCardContent>
            </ArticleCard>
          </>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            path
            thumbnail
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`