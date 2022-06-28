/// <reference types="react" />
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
declare type EntryBackgroundDrawerProps = SwipeableDrawerProps & {
    hasLoader?: boolean;
    headerContent?: any;
    content: any;
};
export declare const EntryBackgroundDrawer: ({ headerContent, content, hasLoader, ...muiProps }: EntryBackgroundDrawerProps) => JSX.Element;
export default EntryBackgroundDrawer;
