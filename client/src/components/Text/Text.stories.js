import React from 'react';
import { Text } from 'components/Text/Text';

export default {
  title: 'Components/Text',

  component: Text,
  argTypes: {},
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Text',
};
