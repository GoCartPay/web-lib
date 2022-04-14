import * as React from 'react'
import './styles.css';
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

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // setIsOpen(isOpen);
  };

  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={drawerOpened}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      {...muiProps}
    >
      <div>
        <div>
          
        </div>
        <p>{content}</p>
      </div>
    </SwipeableDrawer>
  )
}

export default EntryBackgroundDrawer
