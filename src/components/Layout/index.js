import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRocket,
  faSearch,
  faNewspaper,
  faChalkboardTeacher,
  faPhone,
  faTags,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

import { SidebarContainer, SidebarItem, Tooltip } from './Sidebar'
import { Container, Content } from './Content'
import GlobalStyles from './GlobalStyles'
import {
  Topbar,
  TopbarItem,
  TopbarMenu,
  TopbarMenus,
  TopbarMenuItem,
} from './Topbar'

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
    <Topbar>
      <TopbarItem to="/">
        <FontAwesomeIcon icon={faRocket} />
        <span>Reshuttle</span>
      </TopbarItem>
      <TopbarMenu>
        <FontAwesomeIcon icon={faBars} />
        <TopbarMenus>
          <TopbarMenuItem to="/search">
            <FontAwesomeIcon icon={faSearch} />
            <span>search</span>
          </TopbarMenuItem>
          <TopbarMenuItem to="/articles">
            <FontAwesomeIcon icon={faNewspaper} />
            <span>articles</span>
          </TopbarMenuItem>
          <TopbarMenuItem to="/tags">
            <FontAwesomeIcon icon={faTags} />
            <span>tags</span>
          </TopbarMenuItem>
          <TopbarMenuItem to="/courses">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <span>courses</span>
          </TopbarMenuItem>
        </TopbarMenus>
      </TopbarMenu>
    </Topbar>
    <Content>
      <Container>{children}</Container>
    </Content>
  </>
)
