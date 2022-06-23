/// <reference types="react" />
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
declare type EntryBackgroundDrawerProps = SwipeableDrawerProps & {
    hasLoader?: boolean;
    content: any;
};
export declare const EntryBackgroundDrawer: ({ content, hasLoader, ...muiProps }: EntryBackgroundDrawerProps) => JSX.Element;
export default EntryBackgroundDrawer;
