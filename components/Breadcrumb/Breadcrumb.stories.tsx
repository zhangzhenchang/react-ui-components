import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Breadcrumb from './index';
const { Item } = Breadcrumb;

export default {
  title: 'Nav/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    separator: {
      type: { name: 'string' },
      table: {
        defaultValue: { summary: '/' },
      },
      description: '分隔符',
      defaultValue: '/'
    }
  },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    <Item>FPP UI</Item>
    <Item href="http://www.alipay.com/">Home</Item>
    <Item>Breadcrumb</Item>
  </Breadcrumb>
);

export const defaultComp = Template.bind({});
defaultComp.args = {
  // separator: '/'
};

