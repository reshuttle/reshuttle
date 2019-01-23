import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import algoliasearch from 'algoliasearch'

import Layout from '../components/Layout'
import ArticleCard from '../components/ArticleCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

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
  const index = client.initIndex('Articles')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([])

  async function getArticles() {
    setLoading(true)
    const data = await index.search({ query: search })
    const result = data.hits
    setArticles(result)
    setLoading(false)
  }

  useEffect(
    () => {
      getArticles()
    },
    [search],
  )

  return (
    <Layout active="search">
      <div style={{ display: 'flex' }}>
        <SearchInput
          placeholder="Find articles, courses, tags, etc."
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
          {articles.map((item, i) => (
            <div key={i}>
              <ArticleCard {...item} />
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}
