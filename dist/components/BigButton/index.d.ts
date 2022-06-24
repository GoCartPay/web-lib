import * as React from 'react';
import { ButtonProps } from '@mui/material/Button';
declare type MuiButtonProps = ButtonProps & {
    labelText?: string;
    variant?: ButtonProps['variant'];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
declare const MuiButton: React.FC<MuiButtonProps>;
export { MuiButton, MuiButtonProps };
