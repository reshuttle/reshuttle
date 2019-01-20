import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRocket,
  faSearch,
  faNewspaper,
  faChalkboardTeacher,
  faBriefcase,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

import { SidebarContainer, SidebarItem, Tooltip } from './Sidebar'
import { Container, Content } from './Content'
import { Global, css } from '@emotion/core'
import transformColor from '../helpers/transformColor'

export default ({ children }) => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Nunito:400,700|Baloo+Thambi|Fira+Mono');

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
          font-family: 'Fira Mono', monospace;
        }

        blockquote {
          border-left: 0.25em solid #ff642e;
          padding: 1rem 40px;
          margin: 0px;
          background-color: ${transformColor('#ff642e', 100)};

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
    <SidebarContainer>
      <SidebarItem header to="/">
        <FontAwesomeIcon icon={faRocket} />
      </SidebarItem>
      <SidebarItem>
        <FontAwesomeIcon icon={faSearch} />
        <Tooltip>search</Tooltip>
      </SidebarItem>
      <SidebarItem active to="/articles">
        <FontAwesomeIcon icon={faNewspaper} />
        <Tooltip>articles</Tooltip>
      </SidebarItem>
      <SidebarItem>
        <FontAwesomeIcon icon={faChalkboardTeacher} />
        <Tooltip>courses</Tooltip>
      </SidebarItem>
      <SidebarItem>
        <FontAwesomeIcon icon={faBriefcase} />
        <Tooltip>projects</Tooltip>
      </SidebarItem>
      <SidebarItem>
        <FontAwesomeIcon icon={faPhone} />
        <Tooltip>contact</Tooltip>
      </SidebarItem>
    </SidebarContainer>
    <Content>
      <Container>{children}</Container>
    </Content>
  </>
)
