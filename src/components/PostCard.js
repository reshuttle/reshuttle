import React from 'react'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'

import transformColor from '../components/helpers/transformColor'

const PostCardContainer = styled.div({
  width: 450,
  backgroundColor: transformColor('#f5f0e5', -13),
  boxShadow: '0 0 10px ' + transformColor('#f5f0e5', -13),
  ':hover': {
    backgroundColor: transformColor('#f5f0e5', -20),
    WebkitTransform: 'translateY(-8px)',
    transform: 'translateY(-8px)',
  },
  marginBottom: '2rem',
  cursor: 'pointer',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  // Hover float
  WebkitTransform: 'perspective(1px) translateZ(0)',
  transform: 'perspective(1px) translateZ(0)',
  WebkitTransitionDuration: '0.3s',
  transitionDuration: '0.3s',
  WebkitTransitionProperty: 'transform',
  transitionProperty: 'transform',
  WebkitTransitionTimingFunction: 'ease-out',
  transitionTimingFunction: 'ease-out',
})

const PostCardContent = styled.div({
  padding: 20,
})

const PostCardTitle = styled.h3({
  marginTop: 0,
  marginBottom: '0.3rem',
  textDecoration: 'none',
  color: '#000',
})

const PostCardDate = styled.p({
  margin: 0,
  color: '#454545',
  fontSize: '0.9rem',
})

const PostCardDescription = styled.p({
  margin: 0,
  marginTop: '1.5rem',
  color: '#454545',
  fontSize: '1.2rem',
  textAlign: 'left',
})

const Tag = styled.div({
  padding: '3px 10px',
  backgroundColor: '#ccc',
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.9rem',
  marginRight: 5,
  marginBottom: 5,
})

export default ({ slug, title, date, description, tags }) => (
  <PostCardContainer onClick={() => navigate('/posts/' + slug)}>
    <PostCardContent>
      <PostCardTitle>{title}</PostCardTitle>
      <PostCardDate>{date}</PostCardDate>
      <PostCardDescription>{description}</PostCardDescription>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '2rem' }}>
        {tags.map((tag, i) => (
          <Tag key={i}>#{tag}</Tag>
        ))}
      </div>
    </PostCardContent>
  </PostCardContainer>
)
