import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRocket,
  faSearch,
  faNewspaper,
  faChalkboardTeacher,
  faBriefcase,
  faPhone,
  faTags,
} from '@fortawesome/free-solid-svg-icons'

import { SidebarContainer, SidebarItem, Tooltip } from './Sidebar'
import { Container, Content } from './Content'
import GlobalStyles from './GlobalStyles'

export default ({ children, active }) => (
  <>
    <GlobalStyles />
    <SidebarContainer>
      <SidebarItem header to="/">
        <FontAwesomeIcon icon={faRocket} />
      </SidebarItem>
      <SidebarItem active={active === 'search'} to="/search">
        <FontAwesomeIcon icon={faSearch} />
        <Tooltip>search</Tooltip>
      </SidebarItem>
      <SidebarItem active={active === 'articles'} to="/articles">
        <FontAwesomeIcon icon={faNewspaper} />
        <Tooltip>articles</Tooltip>
      </SidebarItem>
      <SidebarItem>
        <FontAwesomeIcon icon={faChalkboardTeacher} />
        <Tooltip>courses</Tooltip>
      </SidebarItem>
      <SidebarItem active={active === 'tags'} to="/tags">
        <FontAwesomeIcon icon={faTags} />
        <Tooltip>tags</Tooltip>
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
