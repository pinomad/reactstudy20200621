import React from 'react'
import Text from '.'
import { text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Text',
  components: Text,
}

export const BasicText = () => {
  return (
    <Text size={text('fontsize', '')} bold={boolean('bold', false)}>
      기본 텍스트
    </Text>
  )
}

BasicText.story = {
  name: '기본 텍스트',
}
