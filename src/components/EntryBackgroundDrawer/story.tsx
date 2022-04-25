import React, { useEffect } from 'react'

import { EntryBackgroundDrawer } from './index'
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/EntryBackgroundDrawer',
  component: EntryBackgroundDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: SwipeableDrawerProps & { content: any, drawerOpened: boolean, handleOnClose: () => void }) => {

  const [isOpen, setIsOpen] = React.useState(() => args.drawerOpened);

  useEffect(() => {
    if (args.drawerOpened !== isOpen) {
      setIsOpen(args.drawerOpened);
    }
  }, [args.drawerOpened]);

  const onClose = () => {
    setIsOpen(false);
  }

  return (
  <>
    <EntryBackgroundDrawer handleOnClose={() => onClose()} drawerOpened={isOpen} content={args.content} />
  </>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  content: 'Yo, whats up?'
}
