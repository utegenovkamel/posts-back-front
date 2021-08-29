import React from 'react'
import { Input } from './Input'

export default {
  title: 'Components/Input',

  component: Input,
  argTypes: {
    outline: {
      control: {
        type: 'boolean'
      }
    },
    required: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const Default = (args) => {
  return <Input {...args} />
}

Default.args = {
  outline: true,
  required: false,
  placeholder: 'Enter text',
  label: 'Name'
}
