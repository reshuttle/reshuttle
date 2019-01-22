import React from 'react'
import { Global, css } from '@emotion/core'

export default () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css?family=Nunito:400,700|Baloo+Thambi|IBM+Plex+Mono:500');

      body {
        margin: 0;
        background-color: #f5f0e5;
      }

      strong {
        font-weight: 700;
      }

      h1,
      h2,
      h3 {
        font-family: 'Baloo Thambi', cursive;
      }

      h1 {
        font-size: 2.5rem;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        margin-top: 1rem;

        ::before {
          content: '# ';
          color: #ff642e;
        }
      }

      h3 {
        font-size: 1.7rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
      }

      p {
        font-family: 'Nunito', sans-serif;
        font-size: 1.3rem;
        margin-top: 0px;
        margin-bottom: 2rem;
        margin-top: 2rem;
        text-align: justify;
      }

      a {
        text-decoration: none;
        color: #ff642e;

        :hover {
          text-decoration: underline;
        }
      }

      .gatsby-highlight pre[class*='language-'] {
        border-left: 0.25em solid #ff642e;
      }

      code[class*='language-'] {
        font-family: 'IBM Plex Mono', monospace;
        padding: 0 0.2em !important;
      }

      blockquote {
        border-left: 0.25em solid #ff642e;
        padding: 1rem 30px;
        margin: 0px;

        p {
          margin: 0px;
        }
      }

      ul {
        margin-top: 2rem;
        margin-bottom: 2rem;

        li {
          font-family: 'Nunito', monospace;
          font-size: 1.3rem;
        }
      }
    `}
  />
)
