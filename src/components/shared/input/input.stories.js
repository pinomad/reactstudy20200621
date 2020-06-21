import React from 'react'
import Input from '.'
import { text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Input',
  components: Input,
}

export const BasicInput = () => {
  return <Input></Input>
}

BasicInput.story = {
  name: '기본 인풋',
}
