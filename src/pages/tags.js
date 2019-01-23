import React from 'react'
import Layout from '../components/Layout'
import styled from '@emotion/styled'

const Tag = styled.span({ padding: 10 })

export default () => (
  <Layout active="tags">
    <Tag>tags</Tag>
  </Layout>
)
