import React from 'react'
import { ButtonProps } from '@mui/material/Button'

import SmallButton from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/SmallButton',
  component: SmallButton,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: ButtonProps & { labelText: string }) => (
  <SmallButton {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  labelText: 'Label'
}

export const WithBorder = Template.bind({});

WithBorder.args = {
  ...Default.args,
  variant: 'outlined',
  labelText: 'Label'
}