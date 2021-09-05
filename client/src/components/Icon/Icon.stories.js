import React from 'react'

import { Icon } from './Icon'

export default {
  title: 'Components/Icon',

  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: [
          'fire',
          'condition',
          'cloud',
          'water',
          'peopleId',
          'bullhorn',
          'key',
          'wifi',
          'server',
          'camera',
          'parking',
          'bell',
          'back',
          'gear'
        ]
      }
    }
  }
}

export const Default = (args) => {
  return <Icon {...args} />
}

Default.args = {
  icon: 'wifi'
}
