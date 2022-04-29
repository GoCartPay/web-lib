import React, { useEffect } from 'react'

import { EntryBackgroundDrawer } from './index'
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/EntryBackgroundDrawer',
  component: EntryBackgroundDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  }
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const CompositeTemplate = (args: SwipeableDrawerProps & { content: any, drawerOpened: boolean, handleOnClose: () => void }) => {

  const styles = useStyles();
  const [isOpen, setIsOpen] = React.useState(() => args.drawerOpened);

  useEffect(() => {
    if (args.drawerOpened !== isOpen) {
      setIsOpen(args.drawerOpened);
    }
  }, [args.drawerOpened]);

  const onClose = () => {
    setIsOpen(false);
  }

  const content = <div className={styles.container}><p>{args.content}</p></div>

  return (
  <>
    <EntryBackgroundDrawer handleOnClose={() => onClose()} drawerOpened={isOpen} content={content} />
  </>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  content: '',
  drawerOpened: true
}

export const Composite = CompositeTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Composite.args = {
  content: '',
  drawerOpened: true
}
