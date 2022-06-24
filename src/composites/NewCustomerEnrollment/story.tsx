import React, { useEffect } from 'react'

import { EntryBackgroundDrawer } from '../../components/EntryBackgroundDrawer/index'
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'
import { makeStyles } from '@mui/styles'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spruce/Composites/NewCustomerEnrollment',
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
const Template = (args: SwipeableDrawerProps & { content: any, open: boolean, hasLoader: boolean }) => {

  const styles = useStyles();
  const [isOpen, setIsOpen] = React.useState(() => args.open);

  useEffect(() => {
    if (args.open !== isOpen) {
      setIsOpen(args.open);
    }
  }, [args.open]);

  const onClose = () => {
    setIsOpen(false);
  }

  const content = <div className={styles.container}><p>{args.content}</p></div>

  return (
  <>
    <EntryBackgroundDrawer onOpen={() => {}} onClose={() => onClose()} open={isOpen} content={content} hasLoader={true} />
  </>
  )
}

export const Composite = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Composite.args = {
  content: '',
  hasLoader: true,
  open: true
}
