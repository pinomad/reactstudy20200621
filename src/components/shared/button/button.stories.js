import React from 'react'
import Button from '.'
import { select, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  components: Button,
}

export const BasicButton = () => {
  return (
    <Button
      full={boolean('full', false)}
      color={select(
        'color',
        ['white', 'blue', 'white', 'black', 'mint', 'red'],
        'mint',
      )}
    >
      제출
    </Button>
  )
}

BasicButton.story = {
  name: '기본 버튼',
}
