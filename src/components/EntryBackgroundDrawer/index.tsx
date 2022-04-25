import * as React from 'react'
import SwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'
import GoCartLogoReverse from '../../assets/gocart-reverse.svg'
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from '@storybook/addons';

export const EntryBackgroundDrawer = ({
  content,
  drawerOpened = false,
  handleOnClose = () => {},
  handleOnOpen = () => {},
  ...muiProps
}: {
  content: any,
  drawerOpened?: boolean,
  handleOnClose?: () => void,
  handleOnOpen?: () => void,
  muiProps?: SwipeableDrawerProps
}) => {
  console.log(handleOnClose)
  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

  };

  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={drawerOpened}
      onClose={() => handleOnClose()}
      onOpen={() => handleOnOpen()}
      {...muiProps}
    >
      <div>
        <div>
          <img
            src={GoCartLogoReverse}
            alt="GoCart logo"
          />
            <CloseIcon onClick={() => { console.log('click'); handleOnClose() }} />
        </div>
        <p>{content}</p>
      </div>
    </SwipeableDrawer>
  )
}

export default EntryBackgroundDrawer
