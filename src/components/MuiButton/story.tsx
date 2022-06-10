import React from 'react'

import MuiButton from './index'
import { ButtonProps } from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/MuiButton',
  component: MuiButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: ButtonProps & { labelText: string }) => (
  <Box sx={{ '& button': { m: 1 } }}>
    <div>
      <MuiButton size="small">Small</MuiButton>
      <MuiButton size="medium">Medium</MuiButton>
      <MuiButton size="large">Large</MuiButton>
    </div>
    <div>
      <MuiButton variant="outlined" size="small">
        Small
      </MuiButton>
      <MuiButton variant="outlined" size="medium">
        Medium
      </MuiButton>
      <MuiButton variant="outlined" size="large">
        Large
      </MuiButton>
    </div>
    <div>
      <MuiButton variant="contained" size="small">
        Small
      </MuiButton>
      <MuiButton variant="contained" size="medium">
        Medium
      </MuiButton>
      <MuiButton variant="contained" size="large">
        Large
      </MuiButton>
    </div>
    <div>
      <Stack direction="row" spacing={2}>
        <MuiButton variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </MuiButton>
        <MuiButton variant="contained" endIcon={<SendIcon />}>
          Send
        </MuiButton>
      </Stack>
    </div>
  </Box>

)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  labelText: 'Button'
}
