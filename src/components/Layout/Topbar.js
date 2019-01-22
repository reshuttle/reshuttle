import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Topbar = styled.div({
  zIndex: 1,
  overflow: 'hidden',
  backgroundColor: '#444C5E',
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: '0 0 10px #444C5E',
  '@media (min-width: 768px)': {
    display: 'none',
  },
})

export const TopbarItem = styled(Link)({
  display: 'block',
  padding: 15,
  color: '#f8f8f2',
  backgroundColor: '#ff642e',
  fontSize: '1.2rem',
  span: {
    fontFamily: "'IBM Plex Mono', monospace",
    marginLeft: 10,
  },
})

export const TopbarMenus = styled.div({
  display: 'none',
  position: 'fixed',
  top: 65,
  right: 10,
  minWidth: 200,
  backgroundColor: '#444C5E',
  flexDirection: 'column',
})

export const TopbarMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: 15,
  color: '#f8f8f2',
  fontSize: '1.2rem',
  ':hover': { [TopbarMenus]: { display: 'flex' } },
})

export const TopbarMenuItem = styled(Link)({
  padding: 13,
  textDecoration: 'none',
  color: '#f8f8f2',
  fontFamily: "'IBM Plex Mono', monospace",
  svg: {
    fontSize: '1rem',
  },
  span: {
    marginLeft: 10,
  },
})
