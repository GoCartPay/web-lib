import React from 'react'
import { BigButton } from './index'
import { ButtonProps } from '@mui/material/Button'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Box from '@mui/material/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/BigButton',
  component: BigButton,
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
        <BigButton size="large" labelText="Label" {...args} />
      </div>
      <div>
        <BigButton variant="outlined" size="large" labelText="Label" {...args} />
      </div>
      <div>
        <BigButton variant="contained" size="large" labelText="Label" {...args} />
      </div>
      <div>
        <BigButton variant="outlined" endIcon={<ArrowRightAltIcon />} labelText="Label" {...args} />
        <BigButton variant="contained" endIcon={<ArrowRightAltIcon />} labelText="Label" {...args} />
      </div>
    </Box>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  labelText: 'Button'
}
