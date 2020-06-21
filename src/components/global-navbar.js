import React from 'react'
import { Link } from 'react-router-dom'
import Container from './shared/container'
import Text from './shared/text'

const PATH = [
  {
    path: '/',
    label: 'HOME',
  },
  {
    path: '/todo',
    label: 'TODO',
  },
  {
    path: '/signin',
    label: 'SIGNIN',
  },
  {
    path: '/error',
    label: 'error',
  },
]
function GlobalNavbar() {
  return (
    <Container>
      {PATH.map(({ path, label }, index) => (
        <Link to={path} key={index}>
          <Text key={index}>{label}</Text>
        </Link>
      ))}
    </Container>
  )
}

export default GlobalNavbar
