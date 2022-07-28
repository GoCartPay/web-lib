import React, { useEffect } from 'react'

import { Loader } from './index'
import { makeStyles } from '@mui/material/styles'
import Box from '@mui/material/Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/Loader',
  component: Loader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/GDkKRn0hdzPqwrILgdvKr1/Enrollment-with-SPRUCE?node-id=3931%3A32528',
    },
  },
}

const useStyles: any = makeStyles({
  container: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    maxWidth: '430px',
    padding: '48px',
    borderRadius: '20px 20px 0 0',
    top: '180px',
  },
});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any & { loading: boolean }) => {

  const [loading, setLoading] = React.useState(args.loading);

  useEffect(() => {
    if (args.loading !== loading) {
      setLoading(args.loading);
    }
  }, [args.loading]);

  return (
  <Box sx={{ backgroundColor: 'black', padding: '30px' }}>
    {loading && <Loader onComplete={() => { setLoading(false) }} /> }
  </Box>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  loading: true
}
