import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Title = styled.h1({ marginBottom: 10, marginTop: '2.5rem' })

const Subtitle = styled.p({
  margin: 0,
  color: '#454545',
  textAlign: 'center',
  fontSize: '1.2rem',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const Divider = styled.hr({
  width: 300,
  margin: '3rem auto 3rem auto',
})

const Button = styled.a(({ color }) => ({
  border: 0,
  backgroundColor: color,
  color: '#fff',
  padding: '15px 20px',
  fontFamily: "'IBM Plex Mono', monospace",
  outline: 0,
  fontSize: '1.1rem',
  cursor: 'pointer',
  '@media (max-width: 768px)': {
    width: '100%',
    marginRight: 0,
    marginBottom: 10,
  },
  marginRight: 10,
  ':last-child': { marginRight: 0 },
}))

export default ({ data }) => {
  const contributor = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <img
          src={contributor.avatar}
          width={150}
          alt={contributor.name}
          style={{ borderRadius: '50%' }}
        />
        <Title>{contributor.name}</Title>
        <Subtitle>
          {contributor.title} at{' '}
          <a href={contributor.organization_url}>
            {contributor.organization_name}
          </a>
        </Subtitle>
        <Divider />
        <Subtitle style={{ maxWidth: 650 }}>{contributor.bio}</Subtitle>
        <Divider />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Button
            color="#333"
            href={'https://github.com/' + contributor.github}
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </Button>
          <Button
            color="#3b5998"
            href={'https://facebook.com/' + contributor.facebook}
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </Button>
          <Button
            color="#e1306c"
            href={'https://instagram.com/' + contributor.instagram}
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </Button>
          <Button
            color="#0077b5"
            href={'https://linkedin.com/in/' + contributor.linkedin}
          >
            <FontAwesomeIcon icon={faGlobe} /> LinkedIn
          </Button>
          <Button color="#40b2a4" href={contributor.website}>
            <FontAwesomeIcon icon={faGlobe} /> Website
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($username: String!) {
    markdownRemark(frontmatter: { username: { eq: $username } }) {
      frontmatter {
        name
        username
        avatar
        email
        github
        linkedin
        instagram
        website
        title
        organization_name
        organization_url
        bio
      }
    }
  }
`
