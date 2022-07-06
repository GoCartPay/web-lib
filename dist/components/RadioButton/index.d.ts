import React from 'react';
import { FormControlLabelProps } from '@mui/material/FormControlLabel';
declare type RadioButtonProps = {
    checked?: FormControlLabelProps['checked'];
    label: FormControlLabelProps['label'];
    onClick?: FormControlLabelProps['onClick'];
    value: FormControlLabelProps['value'];
};
declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
