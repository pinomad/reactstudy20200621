import React from 'react'
import Container from '.'
import { text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Container',
  components: Container,
}

export const BasicContainer = () => {
  return (
    <Container
      padding={text('padding', '')}
      centered={boolean('centerd', false)}
      maxWidth={text('maxWidth', '')}
    >
      Basic Container
    </Container>
  )
}
export const BasicContainer2 = () => {
  return <Container>Basic Container</Container>
}

BasicContainer.story = {
  name: '기본 컨테이너',
}

BasicContainer2.story = {
  name: '기본 컨테이너2',
}
