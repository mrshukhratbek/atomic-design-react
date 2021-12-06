import React from 'react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['primary', 'succes', 'danger'],
      control: { type: 'radio' },
    },
  },
};

const Template = function template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args}>Button</Button>;
};

export const Primary = Template.bind({});
