import React from 'react';
import MuiRadioGroup, { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import RadioButton from '../RadioButton';

type Radio = {
  label: string
  value: string
}

type RadioGroupProps = {
  value: MuiRadioGroupProps['value']
  onChange: MuiRadioGroupProps['onChange']
  radioOptions: Radio[]
}

const RadioGroup: React.FC<RadioGroupProps> = ({ radioOptions, value, ...props}) => (
  <MuiRadioGroup
    value={value}
    {...props}
  >
    {radioOptions.map(radio => 
      <Box key={radio.value} my={0.5}>
        <RadioButton
          label={radio.label}
          value={radio.value}
          checked={radio.value === value}
        />
      </Box>
    )}
  </MuiRadioGroup>
);

export default RadioGroup;