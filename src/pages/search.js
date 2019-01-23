import React from 'react'
import Layout from '../components/Layout'
import styled from '@emotion/styled'

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

export default ({ data }) => (
  <Layout active="search">
    <div style={{ display: 'flex' }}>
      <SearchInput placeholder="Find articles, courses, tags, etc." />
    </div>
  </Layout>
)
