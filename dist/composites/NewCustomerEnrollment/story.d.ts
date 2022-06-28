/// <reference types="react" />
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
import './fade.css';
declare const _default: {
    title: string;
    component: ({ headerContent, content, hasLoader, ...muiProps }: SwipeableDrawerProps & {
        hasLoader?: boolean;
        headerContent?: any;
        content: any;
    }) => JSX.Element;
    argTypes: {};
    parameters: {
        design: {
            type: string;
            url: string;
        };
    };
};
export default _default;
export declare const Composite: any;
