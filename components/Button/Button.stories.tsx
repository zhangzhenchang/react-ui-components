import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DataEntry/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'primary',
};
export const dangerPrimary = Template.bind({});
dangerPrimary.args = {
  primary: true,
  danger: true,
  children: 'dangerPrimary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
};
export const dangerSecondary = Template.bind({});
dangerSecondary.args = {
  danger: true,
  children: 'dangerSecondary',
};

export const Primarydisabled = Template.bind({});
Primarydisabled.args = {
  label: 'Primarydisabled',
  primary: true,
  disabled:true,
};

export const Secondarydisabled = Template.bind({});
Secondarydisabled.args = {
  label: 'Secondarydisabled',
  disabled:true,
};

export const icon = Template.bind({});
icon.args = {
  label: '图标',
  icon: 'Settings'
};

export const loading = Template.bind({});
loading.args = {
  label: 'loading',
  primary: true,
  loading: true
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
