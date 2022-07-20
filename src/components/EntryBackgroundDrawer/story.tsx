import React, { useEffect } from 'react'

import { EntryBackgroundDrawer } from './index'
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Components/EntryBackgroundDrawer',
  component: EntryBackgroundDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: SwipeableDrawerProps & { content: any, open: boolean, hasLoader: boolean }) => {

  const [isOpen, setIsOpen] = React.useState(() => args.open);

  useEffect(() => {
    if (args.open !== isOpen) {
      setIsOpen(args.open);
    }
  }, [args.open]);

  const onClose = () => {
    setIsOpen(false);
  }

  return (
  <>
    <EntryBackgroundDrawer onClose={() => onClose()} open={isOpen} content={args.content} hasLoader={true} />
  </>
  )
}


export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  content: '',
  hasLoader: true,
  open: true
}
