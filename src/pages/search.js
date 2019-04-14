import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Search } from 'js-search'

import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import SEO from '../components/SEO'

const SearchInput = styled.input({
  padding: 20,
  border: 'none',
  backgroundColor: 'transparent',
  borderBottom: '2px solid #ccc',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '1.5rem',
  width: '100%',
  outline: 0,
  ':focus': {
    borderBottom: '2px solid #ff642e',
  },
})

export default ({ data }) => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  function getPosts() {
    setLoading(true)
    const result = data.allMarkdownRemark.edges.map(({ node }) => ({
      id: node.id,
      ...node.frontmatter,
    }))
    const findSearch = new Search('id')
    findSearch.addIndex('title')
    findSearch.addIndex('description')
    findSearch.addIndex('slug')
    findSearch.addIndex('tags')
    findSearch.addIndex('author')
    findSearch.addDocuments(result)
    setPosts(findSearch.search(search))
    setLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [search])

  return (
    <Layout active="search">
      <SEO title="Search posts, courses, tags, etc." />
      <div style={{ display: 'flex' }}>
        <SearchInput
          placeholder="Find posts, courses, tags, etc."
          value={search}
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading ? null : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginTop: '3rem',
          }}
        >
          {posts.map((item, i) => (
            <div key={i}>
              <PostCard {...item} />
            </div>
          ))}
        </div>
      )}
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
    ) {
      edges {
        node {
          id
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
