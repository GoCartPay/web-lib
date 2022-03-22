/// <reference types="react" />
import { ButtonProps } from '@mui/material/Button';
export declare const MuiButton: ({ labelText, color, ...muiProps }: {
    labelText: string;
    color?: ButtonProps['color'];
    muiProps?: ButtonProps;
}) => JSX.Element;
export default MuiButton;
