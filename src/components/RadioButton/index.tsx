import React from 'react';

import FormControlLabel, { FormControlLabelProps} from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';

type RadioButtonProps = {
  checked?: FormControlLabelProps['checked']
  label: FormControlLabelProps['label']
  onClick?: FormControlLabelProps['onClick']
  value: FormControlLabelProps['value']
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked, label, ...props }) => (
  <FormControl
    fullWidth
    sx={(theme) => ({
      border: 1, 
      borderColor: checked ? theme.palette.text.primary : '#DCDEE5',
      backgroundColor: checked ? '#F1F2F5' : '#ffffff',
      borderRadius: theme.spacing(1),
      height: theme.spacing(6),
      display:'flex',
      justifyContent:'center',
      lineHeight:'19px',
      padding: theme.spacing(2),
    })}
  >
    <FormControlLabel
      control={<Radio/>}
      label={
        <Typography 
          variant='body2' 
          sx={{
            fontWeight: checked ? 600 : 400,
          }}
        >
          {label}
        </Typography>
      }
      {...props}
    />
  </FormControl>
);

export default RadioButton;