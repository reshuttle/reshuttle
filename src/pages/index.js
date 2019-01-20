import React from 'react'
import { Global, css } from '@emotion/core'
import Sidebar from '../components/layouts/Sidebar'
import { Content, Container } from '../components/layouts/Content'

export default () => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,600');

        body {
          margin: 0;
          background-color: #f5f0e5;
        }
      `}
    />
    <Sidebar />
    <Content>
      <Container>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vulputate non elit non pharetra. Etiam et elit quis sem ornare
          pulvinar nec in elit. Mauris at tortor in neque facilisis maximus.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi
          volutpat molestie sem, id blandit nibh facilisis eu. Vivamus malesuada
          velit at erat egestas, at mollis sem euismod. Mauris ornare, turpis a
          sagittis imperdiet, ipsum elit sagittis neque, nec interdum ex nibh eu
          elit. Proin velit ante, commodo quis semper et, egestas non metus.
          Phasellus fringilla odio blandit est ultrices sagittis. Curabitur
          vitae volutpat ipsum. Aliquam non mi nec purus auctor tempor a vel
          eros.
        </p>
      </Container>
    </Content>
  </>
)
