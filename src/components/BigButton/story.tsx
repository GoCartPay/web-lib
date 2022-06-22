import React from 'react'
import { MuiButton } from './index'
import { ButtonProps } from '@mui/material/Button'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Box from '@mui/material/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/BigButton',
  component: MuiButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/GDkKRn0hdzPqwrILgdvKr1/Enrollment-with-SPRUCE?node-id=3900%3A32191',
    },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: ButtonProps & { labelText: string }) => {
  return (
    <Box>
      <div>
        <MuiButton size="large" labelText="Label" {...args} />
      </div>
      <div>
        <MuiButton variant="outlined" size="large" labelText="Label" {...args} />
      </div>
      <div>
        <MuiButton variant="contained" size="large" labelText="Label" {...args} />
      </div>
      <div>
        <MuiButton variant="outlined" endIcon={<ArrowRightAltIcon />} labelText="Label" {...args} />
        <MuiButton variant="contained" endIcon={<ArrowRightAltIcon />} labelText="Label" {...args} />
      </div>
    </Box>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  labelText: 'Button'
}
