import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Title = styled.h1({
  fontFamily: "'Quicksand', cursive",
  fontWeight: 700,
  fontSize: '2.5rem',
})

export const Anchor = styled(Link)({
  textDecoration: 'none',
  color: '#ff642e',
  fontFamily: "'Nunito', sans-serif",

  ':hover': {
    textDecoration: 'underline',
  },
})

export const Text = styled.p({
  fontFamily: "'Nunito', sans-serif",
  fontSize: '1.3rem',
})
