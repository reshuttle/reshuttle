import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import algoliasearch from 'algoliasearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

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

const LoadingIconContainer = styled.div({
  marginTop: '3rem',
  display: 'flex',
  justifyContent: 'center',
})

const LoadingIcon = styled(FontAwesomeIcon)({
  textAlign: 'center',
  fontSize: '3rem',
})

export default () => {
  const client = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  )
  const index = client.initIndex('Posts')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  async function getPosts() {
    setLoading(true)
    const data = await index.search({ query: search })
    const result = data.hits
    setPosts(result)
    setLoading(false)
  }

  useEffect(
    () => {
      getPosts()
    },
    [search],
  )

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
      {loading ? (
        <LoadingIconContainer>
          <LoadingIcon spin icon={faSyncAlt} />
        </LoadingIconContainer>
      ) : (
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
