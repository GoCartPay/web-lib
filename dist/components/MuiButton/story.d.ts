/// <reference types="react" />
import { ButtonProps } from '@mui/material/Button';
declare const _default: {
    title: string;
    component: ({ labelText, color, ...muiProps }: {
        labelText: string;
        color?: "primary" | "secondary" | "info" | "warning" | "error" | "success" | "inherit";
        muiProps?: ButtonProps<"button", {}>;
    }) => JSX.Element;
    argTypes: {
        backgroundColor: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: any;
