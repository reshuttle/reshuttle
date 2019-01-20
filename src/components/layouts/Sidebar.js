import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faNewspaper,
  faBriefcase,
  faChalkboardTeacher,
  faRocket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import transformColor from '../helpers/transformColor'

export const SidebarContainer = styled.div({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  backgroundColor: '#444C5E',
  overflowX: 'visible',
  color: '#fff',
  minHeight: '100vh',
  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const SidebarItem = styled.a(({ active, header }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 5,
  padding: 20,
  fontSize: '1.7rem',
  color: '#f8f8f2',
  cursor: 'pointer',
  position: 'relative',
  backgroundColor: header ? '#ff642e' : 'transparent',
  ':after': {
    position: 'absolute',
    content: '""',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#ff642e',
    width: active ? 5 : 0,
    marginTop: 15,
    marginBottom: 15,
  },
  svg: {
    WebkitTransition: '-webkit-transform .5s ease-in-out',
    transition: 'transform .5s ease-in-out',
  },
  ':hover': header
    ? {
        svg: {
          WebkitTransform: 'rotate(360deg)',
          transform: 'rotate(360deg)',
        },
      }
    : {
        [Tooltip]: {
          visibility: 'visible',
        },
      },
}))

export const Tooltip = styled.span(({ header }) => ({
  visibility: 'hidden',
  width: 120,
  backgroundColor: transformColor('#444C5E', 30),
  color: '#fff',
  textAlign: 'center',
  borderRadius: 6,
  padding: '5px 0',
  position: 'absolute',
  zIndex: 300,
  top: '50%',
  left: '190%',
  fontSize: '1rem',
  fontFamily: "'IBM Plex Mono', monospace",
  transform: 'translate(-50%, -50%)',
}))

export default () => (
  <SidebarContainer>
    <SidebarItem header>
      <FontAwesomeIcon icon={faRocket} />
    </SidebarItem>
    <SidebarItem active>
      <FontAwesomeIcon icon={faSearch} />
      <Tooltip>search</Tooltip>
    </SidebarItem>
    <SidebarItem>
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
)
