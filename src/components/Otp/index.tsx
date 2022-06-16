import React, { useState } from 'react';
import Textfield, { TextFieldProps } from '@mui/material/TextField';
import { FormGroup, Paper } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/system/Box';

const otpOuterWrapperStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const textFieldSxStyles = ({ isComplete }: { isComplete: boolean }) => ({
  ".MuiInputBase-input": {
    color: 'transparent',
    fontSize: '20px',
    height: '48px',
  },
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: isComplete ? 'solid 3px #2AD0624D' : undefined,
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: '#DCDEE5',
      backgroundColor: '#F1F2F5',
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "#117B7433",
      borderWidth: '3px',
      backgroundColor: '#F5FAF9',
    }
  },
  "& .MuiOutlinedInput-root.Mui-error": {
    "& > fieldset": {
      borderColor: '#DF2113',
    }
  },
});

const otpInnerWrapperStyles = {
  position: 'absolute',
  display: 'flex',
  height: 1,
  width: 0.545645,
  justifyContent: 'center',
  pointerEvents: 'none'
};

const otpDigitStyles = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 32,
  mx: 0.25,
  color: '#757575',
  ".MuiInputBase-input": {
    textAlign: 'center !important',
  }
};

const generateOtp = (authCode: string, codeLength: number, currentIndex: number) => {
  const codeInputs = [];

  for (let x = 0; x < codeLength; x++) {
    codeInputs.push(
      <Box
        sx={otpDigitStyles}
      >
        {  authCode[x] 
            ? authCode[x] 
            // : currentIndex === x
            //   ? <Input
            //       style={{height: '100%', width: '100%', border: 'solid'}}
            //     /> 
              : <RemoveIcon sx={{fontSize: 32}}/>
        }
      </Box>
    );
  }
  return codeInputs;
};

type OtpProps = TextFieldProps & {
  // the length of the OTP code, defaults to 6
  codeLength?: number
  // toggles styles for textfield when OTP is completed
  isComplete?: boolean
  // function to be called on blur of the text field
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
  // fires when textfield value changes
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  // function to be call when text field is focused on
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
  // the value of the input
  value: string
};

const Otp: React.FC<OtpProps> = ({
  autoFocus,
  codeLength = 6,
  disabled,
  error,
  isComplete,
  onBlur,
  onChange,
  value,
  ...props
}) => {

  const [focusedField, setFocusedField] = useState(0);

  const handleFocusFieldChange = (text: string, isBackspace: boolean): void => {
    setFocusedField((focusedField + 1) < codeLength ? focusedField + 1 : -1);
  };

  const codeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFocusFieldChange(e.target.value.substring(0, codeLength), e.target.value.length < value.length)
    onChange(e);
  };
  /// render individula inputs insted of one textfield
  /// if focus field is current render input else render remove icon
  
  return (
    <Paper>
      <FormGroup sx={otpOuterWrapperStyles}>
        <Textfield
          autoFocus={autoFocus}
          disabled={disabled}
          error={error}
          fullWidth
          id="otp-input"
          inputProps={{
            maxLength: codeLength
          }}
          onBlur={onBlur}
          onChange={codeInputHandler}
          sx={textFieldSxStyles({ isComplete })}
          value={value}
          variant='outlined'
          {...props}
        />
        <Box sx={otpInnerWrapperStyles}>
          {generateOtp(value, codeLength, focusedField)}
        </Box>
      </FormGroup>
    </Paper>
  );
};

export default Otp;