import React from 'react'
import { MuiButton } from '../MuiButton/index'
import ConfettiExplosion from 'react-confetti-explosion';
import Box from '@mui/material/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/Confetti',
  component: ConfettiExplosion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/GDkKRn0hdzPqwrILgdvKr1/Enrollment-with-SPRUCE?node-id=3931%3A32528',
    },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
  const [isExploding, setIsExploding] = React.useState(false);

  return (
    <Box>
      <MuiButton size="large" labelText="Splode" onClick={() => { setIsExploding(true) }} />
      <MuiButton size="large" labelText="Reset" onClick={() => { setIsExploding(false) }} />
      <Box sx={{
        'div.container': {
          marginLeft: '150px',
          height: '400px',
          width: '400px',
          backgroundColor: '#333'
        }
      }}>
        <div className="container">
          {isExploding && <ConfettiExplosion {...args} />}
        </div>
        </Box>
    </Box>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  particleCount: 150,
  particleSize: 8,
  duration: 2000,
  colors: [
    '#22974A',
    '#2AD062',
    '#5EF391',
    '#CBFFDD'
  ],
  force: 0.75,
  floorHeight: 300,
  floorWidth: 425
}
