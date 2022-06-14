import React from 'react'
import { TextFieldProps } from '@mui/material/TextField'
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

  return (
    <Composite
      drawerOpened
      content={
        <>
          <p>Please enter the code sent to the phone ending in 5554 to complete your enrollment.</p>
          <Otp
            autoFocus
          />
        </>
      }
    />
);};

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  // labelText: 'Label'
};
