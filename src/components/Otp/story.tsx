import React, { useState } from 'react'
import Otp from './index'
import {
  Composite
} from '../EntryBackgroundDrawer/story';
import Box from '@mui/material/Box';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Otp',
  component: Otp,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {

  const [otp, setOtp] = useState('');
  const handleChangeOtp = (value: string) => setOtp(value);
  
  return (
    <Composite
      drawerOpened
      content={
        <>
          <p>Please enter the code sent to the phone ending in 5554 to complete your enrollment.</p>
          <Otp
            codeLength={6}
            value={otp}
            onChange={handleChangeOtp}
          />
        </>
      }
    />
  );
};

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  // labelText: 'Label'
};
