import React, { useState } from 'react';
import RadioGroup from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/RadioGroup',
  component: RadioGroup,
}

const radioOptions = [
  { value: 'tel', label: 'Send to (xxx) xxxx 554'},
  { value: 'email', label: 'send to pxxl@philj.com'}
]

const Template = () => {
  const [value, setValue] = useState('tel');

  const handleRadioBtnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  };

  return (
    <div style={{ maxWidth: '327px', margin: '0px auto' }}>
      <RadioGroup
        value={value}
        onChange={handleRadioBtnChange}
        radioOptions={radioOptions}
      />
    </div>
  )
};

export const Default = Template.bind({})