import React from 'react'
import { Global, css } from '@emotion/core'
import Sidebar from '../components/layouts/Sidebar'
import { Content, Container } from '../components/layouts/Content'

export default () => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Nunito|IBM+Plex+Mono:400,400i');

        body {
          margin: 0;
          background-color: #f5f0e5;
        }

        h1 {
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 400;
          font-style: italic;
          font-size: 3rem;
        }

        p {
          font-family: 'Nunito', sans-serif;
          font-size: 1.3rem;
        }
      `}
    />
    <Sidebar />
    <Content>
      <Container>
        <h1>Cross Platform desktop application with Electron</h1>
        <p>
          The demand for efficient web uploads brought about the rise of the
          JAMStack, which facilitates the design of interfaces and makes API
          calls to remote microservices and simple markups with JavaScript. The
          result? Enhanced security, reduced hosting cost, and lower
          requirements of programming skills for building web apps
        </p>
      </Container>
    </Content>
  </>
)
