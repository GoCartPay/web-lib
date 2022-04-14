import * as React from 'react'
import SwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

export const EntryBackgroundDrawer = ({
  content,
  drawerOpened,
  ...muiProps
}: {
  content: any,
  drawerOpened: boolean,
  muiProps?: SwipeableDrawerProps
}) => {
  const [isOpen, setIsOpen] = React.useState(drawerOpened);

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(isOpen);
  };

  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      {...muiProps}
    >
      close icon here
      {content}
    </SwipeableDrawer>
  )
}

export default EntryBackgroundDrawer
