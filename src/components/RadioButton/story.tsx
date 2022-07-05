import React from 'react'
import RadioButton from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/RadioButton',
  component: RadioButton,
}

type RadioButtonTemplateProps = {
  checked?: boolean
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: RadioButtonTemplateProps) => (
  <div style={{ maxWidth: '327px', margin: '0px auto' }}>
    <RadioButton
      value='tel'
      label={'Send to (xxx) xxxx 554'}
      checked={args.checked}
    />
  </div>
);

export const Default = Template.bind({});

export const CheckedRadioBox = Template.bind({});

CheckedRadioBox.args = {
  checked: true
}