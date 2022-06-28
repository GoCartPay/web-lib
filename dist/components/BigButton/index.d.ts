import * as React from 'react';
import { ButtonProps } from '@mui/material/Button';
declare type BigButtonProps = ButtonProps & {
    labelText?: string;
    variant?: ButtonProps['variant'];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
declare const BigButton: React.FC<BigButtonProps>;
export { BigButton, BigButtonProps };
