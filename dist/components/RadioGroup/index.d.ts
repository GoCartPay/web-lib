import React from 'react';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
declare type Radio = {
    label: string;
    value: string;
};
declare type RadioGroupProps = {
    value: MuiRadioGroupProps['value'];
    onChange: MuiRadioGroupProps['onChange'];
    radioOptions: Radio[];
};
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
