/// <reference types="react" />
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
export declare const EntryBackgroundDrawer: ({ content, drawerOpened, handleOnClose, handleOnOpen, ...muiProps }: {
    content: any;
    drawerOpened?: boolean;
    handleOnClose?: () => void;
    handleOnOpen?: () => void;
    muiProps?: SwipeableDrawerProps;
}) => JSX.Element;
export default EntryBackgroundDrawer;
