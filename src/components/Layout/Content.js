import styled from '@emotion/styled'

export const Content = styled.div({
  marginLeft: 74,
  '@media (max-width: 768px)': {
    marginLeft: 0,
    marginTop: 55,
  },
})

export const Container = styled.div({
  maxWidth: 960,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 20,
})
